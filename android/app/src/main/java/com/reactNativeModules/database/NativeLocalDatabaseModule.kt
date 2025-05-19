package com.reactNativeModules.database

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.nativeModules.NativeLocalDatabaseSpec
import com.facebook.react.bridge.Promise
import com.google.gson.Gson
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class NativeLocalDatabaseModule(reactContext: ReactApplicationContext) :
    NativeLocalDatabaseSpec(reactContext) {
    override fun getName() = NAME

    val gson = Gson()

    private val _dbManager = DatabaseManager(reactContext)

    override fun getMonthCatalogs(firstTimestamp: Double, lastDayTimestamp: Double,  promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val catalog = _dbManager.db.dao.getDailyCatalogInMonth(firstTimestamp, lastDayTimestamp)
                val catalogJSONStringified = gson.toJson(catalog)
                promise.resolve(catalogJSONStringified)
            } catch (e: Exception) {
                promise.reject("Something error, ${e.toString()}")
            }
        }
    }

    override fun addDailyCatalog(
        catalog: String,
        promise: Promise
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val catalogObject = gson.fromJson(catalog, DailyCatalog::class.java)
                _dbManager.db.dao.insertDailyCatalog(catalogObject)
                promise.resolve("true")
            } catch (e: Exception) {
                promise.reject("Error adding to database: ${e.toString()}")
            }
        }
    }

    override fun getDailyCatalog(
        date: String,
        promise: Promise
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val catalog = _dbManager.db.dao.getCatalogByDate(date)
                val catalogJSONStringified = gson.toJson(catalog)

                promise.resolve(catalogJSONStringified)
            } catch (e: Exception) {
                promise.reject("Error getting database ${e.toString()}")
            }
        }
    }

    override fun deleteDailyCatalog(
        id: String,
        promise: Promise
    ) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val catalog = _dbManager.db.dao.deleteDailyCatalog(id)
                promise.resolve(catalog.toString())
            } catch (e: Exception) {
                promise.reject("Error getting database ${e.toString()}")
            }
        }
    }

    companion object {
        const val NAME = "NativeLocalDatabase"
    }
}