package com.reactNativeModules.database

import android.content.Context
import androidx.room.Room

class DatabaseManager(context: Context) {
    val db: DailyCatalogDatabase = Room.databaseBuilder(
        context,
        DailyCatalogDatabase::class.java,
        "daily_catalog.db"
    ).build()
}