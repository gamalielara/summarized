import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {addMonths, format} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {AppColor} from '<utils>/color.ts';
import CatalogBox from '<components>/CatalogBox';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

const MONTH_FORMAT = 'MMMM yyyy';

const HomeScreen: React.FC = () => {
  const [monthAmount, setMonthAmount] = useState(0);
  const [monthAndYear, setMonthAndYear] = useState<string>('');

  const changeMonth = (amountOfMonth: number) => {
    const currentDate = new Date();

    const newMonth = addMonths(currentDate, amountOfMonth);

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
      <ScrollView style={styles.catalogWrapper}>
        <CatalogBox mood={1} timestamp={new Date(Date.now()).getTime()} />

        <CatalogBox
          mood={2.5}
          timestamp={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getTime()}
        />
        <CatalogBox
          mood={2.5}
          timestamp={new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).getTime()}
        />
        <CatalogBox
          mood={1}
          timestamp={new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).getTime()}
        />
        <CatalogBox
          mood={4}
          timestamp={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).getTime()}
        />
        <CatalogBox
          mood={3.5}
          timestamp={new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).getTime()}
        />
        <CatalogBox
          mood={5}
          timestamp={new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime()}
          isLastBox
        />
      </ScrollView>

      <TouchableOpacity style={styles.floatingAddButton}>
        <FontAwesomeIcon icon={faPlus} size={30} color={AppColor.tertiary} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
