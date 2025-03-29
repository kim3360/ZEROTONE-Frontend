import { Bold } from 'lucide-react-native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function FoldScreen() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const folders = [
    { label: '강의 정리', icon: '📘' },
    { label: '꿀팁', icon: '📌' },
    { label: '쇼핑 리스트', icon: '🛍'  },
    { label: '기타', icon: '📋' },
  ];


  return (
     <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      {/* 상단 제목 & 날짜 */}
      <View style={styles.header}>
        <Text style={styles.title}>폴더 분류</Text>
        <Text style={styles.date}>{today}</Text>
      </View>

      {/* 카테고리 버튼들 */}
      <View style={styles.folderRow}>
        {folders.map((folder, idx) => (
          <TouchableOpacity key={idx} style={styles.folderButton}>
            <Text style={styles.folderIcon} > {folder.icon} </Text>
            <Text style={styles.folderText}>{folder.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 오늘 업로드된 사진 */}
      <Text style={styles.sectionTitle}>오늘 업로드된 사진</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {[...Array(5)].map((_, idx) => (
          <View key={idx} style={styles.imageBox} />
        ))}
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.duplicateButton}>
          <Text style={styles.bottomText}>📄 중복된 항목</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deletedButton}>
          <Text style={styles.bottomTextRed}>🗑️ 최근 삭제된 항목</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  date: { fontSize: 13, color: '#6B7280' },
  folderRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, },
  folderButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 5,
    alignItems: 'center',
    width: 80,
  },
  folderIcon: { width: 24, height: 24, marginBottom: 4, resizeMode: 'contain', textAlign: 'center' },
  folderText: { fontSize: 12, textAlign: 'center', fontFamily: 'Campton-Bold', fontWeight: 'bold' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  imageScroll: { flexDirection: 'row', marginBottom: 20 },
  imageBox: {
    width: 100,
    height: 100,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginRight: 12,
  },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between' },
  duplicateButton: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 14,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  deletedButton: {
    flex: 1,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    padding: 14,
    marginLeft: 8,
  },
  bottomText: { textAlign: 'center', color: '#374151' },
  bottomTextRed: { textAlign: 'center', color: '#DC2626' },
});
