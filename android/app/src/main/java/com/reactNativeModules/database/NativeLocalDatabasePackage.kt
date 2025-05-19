package com.reactNativeModules.database

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLocalDatabasePackage : TurboReactPackage() {
    override fun getModule(
        name: String,
        context: ReactApplicationContext
    ): NativeModule? {
        if (name == NativeLocalDatabaseModule.NAME) {
            return NativeLocalDatabaseModule(context)
        }

        return null
    }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeLocalDatabaseModule.NAME to ReactModuleInfo(
                _name = NativeLocalDatabaseModule.NAME,
                _className = NativeLocalDatabaseModule.NAME,
                _canOverrideExistingModule = false,
                _needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}