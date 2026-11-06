import { ScrollView, View, Text, Pressable } from "react-native";
import { ReactNode } from "react";
import { styles } from "@/constants/theme";
export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
export function SectionTitle({
  title,
  action,
  onAction,
}: {
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 22,
        marginBottom: 12,
      }}
    >
      <Text style={styles.h2}>{title}</Text>
      {action && (
        <Pressable onPress={onAction}>
          <Text style={{ color: "#7557E8", fontWeight: "700", fontSize: 12 }}>
            {action}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
