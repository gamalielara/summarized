package com.reactNativeModules.database

import androidx.room.Database
import androidx.room.RoomDatabase

@Database(
    entities = [DailyCatalog::class],
    version = 1,
)
abstract class DailyCatalogDatabase : RoomDatabase() {
    abstract val dao: DailyCatalogDao
}