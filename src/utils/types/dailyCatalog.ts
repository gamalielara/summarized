export interface DailyCatalog {
  /**
   * @description MM-DD-YYYY
   */
  date: string;
  timestamp: number;
  moodRating: number;
  emotions: string;
  highlightOfTheDay: string;
}
