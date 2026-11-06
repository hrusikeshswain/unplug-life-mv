import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Screen, SectionTitle } from "@/components/Screen";
import { styles } from "@/constants/theme";
export default function Home() {
  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <View>
          <Text style={styles.eyebrow}>MONDAY, YOUR MOMENT</Text>
          <Text style={styles.h1}>Hello, human. ✨</Text>
        </View>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 16,
            backgroundColor: "#EEE9FF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22 }}>🌱</Text>
        </View>
      </View>
      <Text style={styles.body}>A fresh day to be a little more present.</Text>
      <LinearGradient
        colors={["#7055E7", "#9670ED", "#D18AD8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 26,
          padding: 22,
          marginTop: 22,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            color: "#F3EFFF",
            fontWeight: "700",
            fontSize: 12,
            letterSpacing: 1,
          }}
        >
          YOUR DAILY REMINDER
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "800",
            color: "white",
            lineHeight: 32,
            marginTop: 10,
          }}
        >
          Your life is happening beyond the screen.
        </Text>
        <Text
          style={{
            color: "#F4ECFF",
            fontSize: 13,
            lineHeight: 20,
            marginTop: 8,
          }}
        >
          Pause. Breathe. Look around. You’re right where you need to be.
        </Text>
        <Pressable
          onPress={() => router.push("/(tabs)/checkin")}
          style={{
            alignSelf: "flex-start",
            backgroundColor: "white",
            paddingHorizontal: 17,
            paddingVertical: 12,
            borderRadius: 14,
            marginTop: 18,
          }}
        >
          <Text style={{ color: "#6548D6", fontWeight: "800" }}>
            Take a quick check-in →
          </Text>
        </Pressable>
      </LinearGradient>
      <SectionTitle title="Your wellbeing snapshot" />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={[styles.card, { flex: 1, backgroundColor: "#F0ECFF" }]}>
          <Text style={{ fontSize: 22 }}>🔥</Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              color: "#4F3C9B",
              marginTop: 8,
            }}
          >
            1 day
          </Text>
          <Text style={styles.caption}>Mindful streak</Text>
        </View>
        <View style={[styles.card, { flex: 1, backgroundColor: "#E8F7F1" }]}>
          <Text style={{ fontSize: 22 }}>🌿</Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              color: "#28775C",
              marginTop: 8,
            }}
          >
            0 / 7
          </Text>
          <Text style={styles.caption}>Reset days done</Text>
        </View>
        <View style={[styles.card, { flex: 1, backgroundColor: "#FCECF3" }]}>
          <Text style={{ fontSize: 22 }}>💗</Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              color: "#A64D78",
              marginTop: 8,
            }}
          >
            Today
          </Text>
          <Text style={styles.caption}>Start gently</Text>
        </View>
      </View>
      <SectionTitle title="A small step, a real shift" />
      <Pressable
        onPress={() => router.push("/(tabs)/plan")}
        style={styles.card}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 13 }}>
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 17,
              backgroundColor: "#E7F6EF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 26 }}>🌳</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "800", fontSize: 15, color: "#24213A" }}>
              Try the 7-day reset
            </Text>
            <Text style={styles.caption}>
              Tiny practices to reconnect with your day.
            </Text>
          </View>
          <Text style={{ color: "#7557E8", fontSize: 20 }}>›</Text>
        </View>
      </Pressable>
      <SectionTitle
        title="Explore at your pace"
        action="See all"
        onAction={() => router.push("/(tabs)/learn")}
      />
      <View style={{ flexDirection: "row", gap: 10 }}>
        {[
          ["🧠", "Understand habits"],
          ["🌙", "Phone-free wind-down"],
        ].map(([e, t]) => (
          <Pressable
            key={t}
            onPress={() => router.push("/(tabs)/learn")}
            style={[styles.card, { flex: 1 }]}
          >
            <Text style={{ fontSize: 25 }}>{e}</Text>
            <Text style={{ fontWeight: "700", color: "#24213A", marginTop: 9 }}>
              {t}
            </Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
