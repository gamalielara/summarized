package com.reactNativeModules.database

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "habit_catalog")
data class HabitCatalog(
    @PrimaryKey(autoGenerate = true) val id:Int = 0,
    val dayCatalogId: Int,
    val habitId: Int,
    val score: Double
)
