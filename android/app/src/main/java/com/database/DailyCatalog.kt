package com.database

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "daily_catalog")
data class DailyCatalog(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val date: String,
    val timestamp: Long,
    val moodRating: Double,
    val emotions: List<String>,
    val highlightOfTheDay: String
)
