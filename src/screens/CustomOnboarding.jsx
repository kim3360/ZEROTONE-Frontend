import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: '',
    subtitle: '',
    image: require('../assets/Loding.png'),
  },
  {
    id: '2',
    title: '스크린샷 업로드로\n 내 갤러리를 더 깔끔하게',
    subtitle: '버튼 하나로 스크린샷 업로드',
    image: require('../assets/Loding2.png'),
  },
  
  {
    id: '3',
    title: 'GPT 요약\n AI가 핵심 문장 요약',
    subtitle: '이미지 속 텍스트 자동으로 요약',
    image: require('../assets/Logo.png'),
  },
];

export default function CustomOnboarding({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);

    if (index === slides.length - 1) {
      setTimeout(() => onFinish(), 500);
    }
  };

  const handleEndReached = () => {
    if (currentIndex === slides.length - 1) {
      onFinish(); // 마지막 페이지에서 자동 종료
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleEndReached}
        data={slides}
        keyExtractor={(item) => item.id}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.contentWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Image source={item.image} style={styles.image} />
              <View style={styles.indicator}>
                {slides.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.dot,
                      currentIndex === i && { backgroundColor: '#8B5CF6' },
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slide: {
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#555', textAlign: 'center' },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 6,
  },
});
