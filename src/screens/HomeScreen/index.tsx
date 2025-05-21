import AppLoading from '<components>/AppLoading';
import CatalogBox from '<components>/CatalogBox';
import NoCatalog from '<components>/NoCatalog';
import {AppColor} from '<utils>/constants/color.ts';
import {MoodDictionary} from '<utils>/constants/mood';
import {getMonthTimestamps} from '<utils>/getMonthTimestamp';
import NativeLocalDatabase from '<utils>/specs/NativeLocalDatabase.ts';
import {DailyCatalog} from '<utils>/types/dailyCatalog';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {addMonths, format} from 'date-fns';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const MONTH_FORMAT = 'MMMM yyyy';
const thisMonthAndYear = format(new Date(), MONTH_FORMAT);

const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthAndYear, setMonthAndYear] = useState<string>(thisMonthAndYear);
  const [catalogs, setCatalogs] = useState<DailyCatalog[]>([]);

  useEffect(() => {
    const [month, year] = monthAndYear.split(' ');

    const {firstDayTimestamp, lastDayTimestamp} = getMonthTimestamps(
      month,
      Number(year),
    );

    setIsLoading(true);

    NativeLocalDatabase.getMonthCatalogs(firstDayTimestamp, lastDayTimestamp)
      .then(data => {
        console.log(`DATA FOR ${month} ${Number(year)}`, data);
        try {
          const dailyCatalogs = JSON.parse(data) as DailyCatalog[];

          setCatalogs(dailyCatalogs);
        } catch (err) {
          setCatalogs([]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [monthAndYear]);

  const changeMonth = (amountOfMonth: number) => {
    setCurrentDate(state => {
      const newDate = new Date(state);
      newDate.setMonth(newDate.getMonth() + amountOfMonth);
      return newDate;
    });

    const newMonth = addMonths(currentDate, amountOfMonth);

    setMonthAndYear(format(newMonth, MONTH_FORMAT));
  };

  const HomeComponent = useCallback(() => {
    if (isLoading) {
      return <AppLoading />;
    }

    if (catalogs.length) {
      return (
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
      );
    }

    return <NoCatalog />;
  }, [isLoading, catalogs]);

  return (
    <View style={styles.container}>
      <View style={styles.monthHeaderPickerContainer}>
        <Pressable hitSlop={20} onPress={() => changeMonth(-1)}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={AppColor.secondary}
            size={20}
          />
        </Pressable>
        <Text style={styles.thisMonthHeadingText}>{monthAndYear}</Text>
        <Pressable hitSlop={20} onPress={() => changeMonth(1)}>
          <FontAwesomeIcon
            icon={faChevronRight}
            color={AppColor.secondary}
            size={20}
          />
        </Pressable>
      </View>
      <HomeComponent />
      <TouchableOpacity style={styles.floatingAddButton}>
        <FontAwesomeIcon icon={faPlus} size={30} color={AppColor.tertiary} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
