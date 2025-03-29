import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native';

export const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>마이페이지</Text>

                <View style={styles.profileSection}>
                    <View style={styles.profileImage} />
                    <Text style={styles.nickname}>닉네임</Text>
                </View>
                
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.buttonText}>프로필 수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.buttonText}>예약 내역</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>폴더 관련 정보</Text>
                    <View style={styles.itemRow}><Text style={styles.itemText}>파일정리</Text><Text>{'>'}</Text></View>
                    <View style={styles.itemRow}><Text style={styles.itemText}>백업 관리</Text><Text>{'>'}</Text></View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>기타 기능</Text>
                    <View style={styles.itemRow}><Text style={styles.itemText}>공지사항</Text><Text>{'>'}</Text></View>
                    <View style={styles.itemRow}><Text style={styles.itemText}>고객센터</Text><Text>{'>'}</Text></View>
                    <View style={styles.itemRow}><Text style={styles.itemText}>1:1상담</Text><Text>{'>'}</Text></View>
                    <View style={styles.itemRow}><Text style={styles.itemText}>의견 보내기</Text><Text>{'>'}</Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 20,
        
    },
    profileSection: {
        alignItems: "center",
        marginBottom: 20, 
    },
    profileImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#ccc",
        marginBottom: 8,
    },
    nickname: {
        fontSize: 14,
        fontWeight: "bold",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 24,
    },
    actionButton: {
        borderWidth: 1,
        borderColor: "#999",
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 13,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        color: "#999",
        marginBottom: 12,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    itemText: {
        fontSize: 14,
    },
});


