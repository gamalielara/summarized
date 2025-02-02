package com.reactNativeModules.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Upsert

@Dao
interface DailyCatalogDao {
    @Insert
    suspend fun insertDailyCatalog(catalog: DailyCatalog)

    @Upsert
    suspend fun editDailyCatalog(catalog: DailyCatalog)

    @Delete
    suspend fun deleteDailyCatalog(catalog: DailyCatalog)

    @Query("SELECT * FROM daily_catalog WHERE date BETWEEN :startDate AND :endDate ORDER BY date ASC")
    suspend fun getDailyCatalogInMonth(startDate: String, endDate: String): List<DailyCatalog>
}