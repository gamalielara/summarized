package com.reactNativeModules.sharedPreferences

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeSharedPreferencesPackage : TurboReactPackage() {
    override fun getModule(
        name: String,
        context: ReactApplicationContext
    ): NativeModule? {
        if (name == NativeSharedPreferencesModule.NAME) {
            return NativeSharedPreferencesModule(context)
        }

        return null
    }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeSharedPreferencesModule.NAME to ReactModuleInfo(
                _name = NativeSharedPreferencesModule.NAME,
                _className = NativeSharedPreferencesModule.NAME,
                _canOverrideExistingModule = false,
                _needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }

}