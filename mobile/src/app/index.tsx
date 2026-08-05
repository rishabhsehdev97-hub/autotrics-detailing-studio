import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

import HeroCard from "../components/HeroCard";
import { Colors, Spacing } from "../theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>AUTOTRICS</Text>

        <Text style={styles.subtitle}>
          Premium Detailing Studio
        </Text>

        <HeroCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
  },

  logo: {
    color: Colors.text,
    fontSize: 36,
    fontWeight: "900",
    marginTop: 20,
  },

  subtitle: {
    color: Colors.textSecondary,
    fontSize: 16,
    marginTop: 4,
  },
});