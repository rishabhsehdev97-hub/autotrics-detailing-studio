import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./buttons/PrimaryButton";
import { Colors, Spacing, Radius } from "../theme";

export default function HeroCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.badge}>AUTOTRICS PREMIUM</Text>

      <Text style={styles.title}>
        Protect Your Car With Premium PPF
      </Text>

      <Text style={styles.description}>
        Paint Protection Film • Ceramic Coating • Detailing • Car Spa
      </Text>

      <PrimaryButton
        title="Get AI Quote"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginTop: Spacing.lg,
  },

  badge: {
    color: Colors.primary,
    fontWeight: "700",
    marginBottom: 10,
  },

  title: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  description: {
    color: Colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },
});