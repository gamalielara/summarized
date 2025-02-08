package com.reactNativeModules.database

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "daily_catalog")
data class DailyCatalog(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val date: String, // Format MM-DD-YYYY
    val timestamp: Long, // milisec epoch
    val moodRating: Double,
    val emotions: String,
    val highlightOfTheDay: String
)
