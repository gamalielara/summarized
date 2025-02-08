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

    @Query("DELETE FROM daily_catalog WHERE id = :catalogId")
    suspend fun deleteDailyCatalog(catalogId: String)

    @Query("SELECT * FROM daily_catalog WHERE timestamp BETWEEN :startDate AND :endDate")
    suspend fun getDailyCatalogInMonth(startDate: String, endDate: String): List<DailyCatalog>

    @Query("SELECT * FROM daily_catalog WHERE date IS :dateToQuery")
    suspend fun getCatalogByDate(dateToQuery: String): List<DailyCatalog>
}