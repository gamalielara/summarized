import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles.ts';
import dayjs from 'dayjs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {AppColor} from '<utils>/color.ts';
import {MoodDictionary, MoodNames} from '<utils>/constants/mood.ts';

interface Props {
  timestamp: number;
  mood: keyof typeof MoodDictionary;
  isLastBox?: boolean;
}

const CatalogBox: React.FC<Props> = ({mood, timestamp, isLastBox}) => {
  const thisDate = useMemo(() => {
    return {
      day: dayjs(timestamp).format('ddd'),
      date: dayjs(timestamp).format('D'),
      month: dayjs(timestamp).format('MMM'),
    };
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.dateCircle}>
        <View>
          <Text style={styles.dateText}>{thisDate.day.toUpperCase()}</Text>
          <Text style={styles.dateText}>{`${thisDate.date}`}</Text>
        </View>
        {!isLastBox && <View style={styles.dateHorizontalLine} />}
      </View>

      <View style={styles.container}>
        <View style={styles.dayDetailContainer}>
          <FontAwesomeIcon
            icon={MoodDictionary[mood]}
            color={AppColor.textSecondary}
            size={40}
          />
          <View style={styles.dayDetail}>
            <Text style={styles.moodText}>{MoodNames[mood]}</Text>
            <Text style={styles.habitText}>
              exercise/gym, read, meditation, journaling, keyboard, track monet,
              illicit
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CatalogBox;
