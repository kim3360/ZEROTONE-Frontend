import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>👋 안녕하세요! 오늘도 자료 정리하러 오셨군요.</Text>
      <View style={styles.badgeRow}>
        <Text style={[styles.badge, { backgroundColor: "#3B82F6" }]}>📄 오늘 요약: {summaries.length}개</Text>
        <Text style={[styles.badge, { backgroundColor: "#FACC15" }]}>📁 폴더 분류: 3종류</Text>
        <Text style={[styles.badge, { backgroundColor: "#22C55E" }]}>🕒 최근 열람: 1시간 전</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
