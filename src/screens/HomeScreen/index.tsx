import NativeLocalDatabase from "<utils>/specs/NativeLocalDatabase.ts";
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
import {AppColor} from '<utils>/constants/color.ts';
import CatalogBox from '<components>/CatalogBox';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

const MONTH_FORMAT = 'MMMM yyyy';

const HomeScreen: React.FC = () => {
  const [monthAmount, setMonthAmount] = useState(0);
  const [monthAndYear, setMonthAndYear] = useState<string>('');

  const haha = async () => {
    const hehe = await NativeLocalDatabase.getDailyCatalog("01-01-2025");
    console.log("HAHAHA ", hehe);
  }

  useEffect(() => {
    haha();
  }, []);

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
        <CatalogBox
          mood={1}
          timestamp={new Date(Date.now()).getTime()}
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
        <CatalogBox
          mood={2.5}
          timestamp={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getTime()}
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
        <CatalogBox
          mood={2.5}
          timestamp={new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).getTime()}
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
        <CatalogBox
          mood={1}
          timestamp={new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).getTime()}
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
        <CatalogBox
          mood={4}
          timestamp={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).getTime()}
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
        <CatalogBox
          mood={3.5}
          timestamp={new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).getTime()}
          highlightOfTheDay=""
        />
        <CatalogBox
          mood={5}
          timestamp={new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime()}
          isLastBox
          highlightOfTheDay="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque ultricies, arcu at feugiat tincidunt, metus magna pulvinar lorem, eget tempor eros lorem vitae magna. Proin id libero vehicula, faucibus ipsum id, ultrices neque. Integer faucibus, mi sit amet pharetra fermentum, ligula magna tincidunt est, ut convallis turpis nulla nec odio. Vivamus ut tincidunt turpis. Duis eget mauris sem. Nam at dolor euismod, tristique metus sit amet, fringilla nulla. Etiam nec luctus erat. Suspendisse potenti. Sed convallis vestibulum justo, ut maximus odio feugiat vel. Phasellus convallis ligula sed risus pharetra, nec volutpat risus vestibulum."
        />
      </ScrollView>

      <TouchableOpacity style={styles.floatingAddButton}>
        <FontAwesomeIcon icon={faPlus} size={30} color={AppColor.tertiary} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
