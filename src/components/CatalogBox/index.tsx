import React, {useMemo} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import styles from './styles.ts';
import dayjs from 'dayjs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {AppColor} from '<utils>/color.ts';
import {MoodDictionary, MoodNames} from '<utils>/constants/mood.ts';

interface Props {
  timestamp: number;
  mood: keyof typeof MoodDictionary;
  isLastBox?: boolean;
  highlightOfTheDay: string;
}

const CatalogBox: React.FC<Props> = ({
  mood,
  timestamp,
  isLastBox,
  highlightOfTheDay,
}) => {
  const thisDate = useMemo(() => {
    return {
      day: dayjs(timestamp).format('ddd'),
      date: dayjs(timestamp).format('D'),
      month: dayjs(timestamp).format('MMM'),
    };
  }, [timestamp]);

  return (
    <View style={styles.wrapper}>
      {!isLastBox && <View style={styles.dateVerticalLine} />}

      <View style={styles.dateCircle}>
        <View>
          <Text style={styles.dateText}>{thisDate.day.toUpperCase()}</Text>
          <Text style={styles.dateText}>{`${thisDate.date}`}</Text>
        </View>
      </View>

      <Pressable
        style={styles.boxContainer}
        onPress={() => Alert.alert('HAHA')}>
        <View style={styles.dayDetailContainer}>
          <FontAwesomeIcon
            icon={MoodDictionary[mood]}
            color={AppColor.textSecondary}
            size={40}
          />
          <View style={styles.dayCatalogDetail}>
            <Text style={styles.moodText}>{MoodNames[mood]}</Text>
            <Text style={styles.habitText}>
              🏋🏼exercise/gym, read, meditation, journaling, keyboard, track
              monet, illicit
            </Text>
          </View>
        </View>

        <View style={styles.horizontalDividerLine} />

        <View>
          <Text style={styles.descriptionTitleText}>
            🌟Highlight of the day
          </Text>
          <Text style={styles.descriptionText} numberOfLines={3}>
            {highlightOfTheDay}
          </Text>
        </View>

        <View style={styles.horizontalDividerLine} />

        <View>
          <Text style={styles.descriptionTitleText}>🎯 Goal Achieved</Text>
          <Text style={styles.descriptionText}>
            Meditation, exercise/gym, read
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CatalogBox;
