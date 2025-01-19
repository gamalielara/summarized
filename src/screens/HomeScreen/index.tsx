import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {format, addMonths, subMonths} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {AppColor} from '<utils>/color.ts';

const MONTH_FORMAT = 'MMMM yyyy';

const HomeScreen: React.FC = () => {
  const [monthAmount, setMonthAmount] = useState(0);
  const [monthAndYear, setMonthAndYear] = useState<string>('');

  const changeMonth = (amountOfMonth: number) => {
    const currentDate = new Date();

    let newMonth: Date;

    if (amountOfMonth >= 0) {
      newMonth = addMonths(currentDate, Math.abs(amountOfMonth));
    } else {
      newMonth = subMonths(currentDate, Math.abs(amountOfMonth));
    }

    setMonthAndYear(format(newMonth, MONTH_FORMAT));
  };

  useEffect(() => {
    changeMonth(monthAmount);
  }, [monthAmount]);

  return (
    <View style={styles.container}>
      <View style={styles.monthHeaderPickerContainer}>
        <Pressable
          hitSlop={20}
          onPress={() => setMonthAmount(state => state - 1)}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={AppColor.secondary}
            size={20}
          />
        </Pressable>
        <Text style={styles.thisMonthHeadingText}>{monthAndYear}</Text>
        <Pressable
          hitSlop={20}
          onPress={() => setMonthAmount(state => state + 1)}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={AppColor.secondary}
            size={20}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
