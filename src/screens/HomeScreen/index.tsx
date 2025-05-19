import CatalogBox from '<components>/CatalogBox';
import {AppColor} from '<utils>/constants/color.ts';
import {MoodDictionary} from '<utils>/constants/mood';
import {getMonthTimestamps} from '<utils>/getMonthTimestamp';
import NativeLocalDatabase from '<utils>/specs/NativeLocalDatabase.ts';
import {DailyCatalog} from '<utils>/types/dailyCatalog';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {addMonths, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const MONTH_FORMAT = 'MMMM yyyy';

const HomeScreen: React.FC = () => {
  const [monthAmount, setMonthAmount] = useState(0);
  const [monthAndYear, setMonthAndYear] = useState<string>('');
  const [catalogs, setCatalogs] = useState<DailyCatalog[]>([]);

  useEffect(() => {
    const [month, year] = monthAndYear.split(' ');

    const {firstDayTimestamp, lastDayTimestamp} = getMonthTimestamps(
      month,
      Number(year),
    );

    NativeLocalDatabase.getMonthCatalogs(
      firstDayTimestamp,
      lastDayTimestamp,
    ).then(data => {
      console.log(`DATA FOR ${month} ${Number(year)}`, data);
      try {
        const dailyCatalogs = JSON.parse(data) as DailyCatalog[];

        setCatalogs(dailyCatalogs);
      } catch (err) {
        setCatalogs([]);
      }
    });
  }, [monthAndYear]);

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
      {
        catalogs.length ? (
          <FlatList
            style={styles.catalogWrapper}
            data={catalogs}
            renderItem={({item, index}) => {
              const {moodRating, highlightOfTheDay, timestamp} = item;
              return (
                <CatalogBox
                  mood={moodRating as keyof typeof MoodDictionary}
                  highlightOfTheDay={highlightOfTheDay}
                  timestamp={timestamp}
                  isLastBox={index === catalogs.length - 1}
                />
              );
            }}
          />
        ) : (
          <Text>No daily catalog found</Text>
        )
      }

      <TouchableOpacity style={styles.floatingAddButton}>
        <FontAwesomeIcon icon={faPlus} size={30} color={AppColor.tertiary} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
