package com.nativeModules.sharedPreferences


import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.nativeModules.NativeSharedPreferencesSpec

class NativeSharedPreferencesModule(reactContext: ReactApplicationContext) :
    NativeSharedPreferencesSpec(reactContext) {
    private val _sharedPref =
        getReactApplicationContext().getSharedPreferences("mypreferences", Context.MODE_PRIVATE)

    override fun getName() = NAME

    override fun getItem(key: String?): String? {
        val value = _sharedPref.getString(key, null)
        return value.toString()
    }

    override fun setItem(key: String?, value: String?) {
        val editor = _sharedPref.edit()
        editor.putString(key, value)
        editor.apply()
    }

    override fun clearItem(key: String?) {
        val editor = _sharedPref.edit()
        editor.remove(key)
        editor.apply()
    }

    override fun clearAll() {
        val editor = _sharedPref.edit()
        editor.clear()
        editor.apply()
    }

    companion object {
        const val NAME = "NativeSharedPreferences"
    }

}