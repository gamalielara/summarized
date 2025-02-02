package com.reactNativeModules.database

import com.facebook.react.bridge.ReactApplicationContext
import com.nativeModules.NativeLocalDatabaseSpec
import com.facebook.react.bridge.Promise
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class NativeLocalDatabaseModule(reactContext: ReactApplicationContext) :
    NativeLocalDatabaseSpec(reactContext) {
    override fun getName() = NAME

    private val _dbManager = DatabaseManager(reactContext)
    
    override fun getMonthCatalogs(month: String, promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val catalog = _dbManager.db.dao.getDailyCatalogInMonth("01-01-2025", "02-01-2025")
                promise.resolve(catalog?.toString ?: "{}")
            } catch (e: Exception) {
                promise.reject("Something error, ${e.toString()}")
            }
        }
    }

    companion object {
        const val NAME = "NativeLocalDatabase"
    }
}