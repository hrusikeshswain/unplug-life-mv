import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Screen } from "@/components/Screen";
import { styles } from "@/constants/theme";
import { saveJSON } from "@/lib/storage";
const qs = [
  [
    "How often do you check your phone without a clear reason?",
    ["Rarely", "Sometimes", "Often", "Very often"],
  ],
  [
    "How do you feel when your phone is out of reach?",
    ["Comfortable", "A little uneasy", "Anxious", "Very distressed"],
  ],
  [
    "Does phone use interrupt moments that matter to you?",
    ["Not really", "Sometimes", "Often", "Most days"],
  ],
  [
    "How easy is it to take a short phone-free break?",
    ["Easy", "Mostly easy", "A bit difficult", "Very difficult"],
  ],
  [
    "How present have you felt today?",
    ["Very present", "Somewhat present", "Distracted", "Disconnected"],
  ],
];
export default function Checkin() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const choose = (n: number) => {
    const a = [...answers];
    a[step] = n;
    setAnswers(a);
  };
  const finish = async () => {
    await saveJSON("checkin", answers);
    setDone(true);
  };
  if (done)
    return (
      <Screen>
        <Text style={{ fontSize: 44, marginTop: 45 }}>💜</Text>
        <Text style={[styles.h1, { marginTop: 18 }]}>
          Thank you for checking in.
        </Text>
        <Text style={styles.body}>
          Your answers are a moment-in-time reflection, not a diagnosis or
          clinical score. Notice what feels helpful and choose one small action
          for today.
        </Text>
        <View
          style={[styles.card, { marginTop: 24, backgroundColor: "#F0ECFF" }]}
        >
          <Text style={{ fontWeight: "800", fontSize: 16, color: "#43347E" }}>
            Your gentle next step
          </Text>
          <Text style={styles.body}>
            Try a 10-minute phone-free moment. Put your phone somewhere out of
            reach and do one thing you enjoy.
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setStep(0);
            setAnswers([]);
            setDone(false);
          }}
          style={[
            styles.primary,
            { backgroundColor: "#7557E8", marginTop: 15 },
          ]}
        >
          <Text style={styles.primaryText}>Check in again</Text>
        </Pressable>
      </Screen>
    );
  return (
    <Screen>
      <Text style={styles.eyebrow}>A MOMENT FOR YOU</Text>
      <Text style={styles.h1}>How are you feeling about your phone?</Text>
      <Text style={styles.body}>
        A quick, private reflection. There are no right or wrong answers.
      </Text>
      <View
        style={{
          height: 7,
          backgroundColor: "#EAE6F4",
          borderRadius: 9,
          marginTop: 25,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: 7,
            width: `${((step + 1) / qs.length) * 100}%`,
            backgroundColor: "#8666E9",
            borderRadius: 9,
          }}
        />
      </View>
      <Text style={[styles.caption, { marginTop: 9 }]}>
        QUESTION {step + 1} OF {qs.length}
      </Text>
      <Text
        style={[
          styles.h2,
          { fontSize: 21, lineHeight: 29, marginTop: 24, marginBottom: 17 },
        ]}
      >
        {qs[step][0]}
      </Text>
      {qs[step][1].map((x, i) => (
        <Pressable
          key={x}
          onPress={() => choose(i)}
          style={[
            styles.option,
            answers[step] === i && {
              borderColor: "#7557E8",
              backgroundColor: "#F1EDFF",
            },
          ]}
        >
          <Text style={{ fontWeight: "700", color: "#29253F", flex: 1 }}>
            {x}
          </Text>
          <Text style={{ color: answers[step] === i ? "#7557E8" : "#C4C0CF" }}>
            {answers[step] === i ? "●" : "○"}
          </Text>
        </Pressable>
      ))}
      <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
        {step > 0 && (
          <Pressable
            onPress={() => setStep(step - 1)}
            style={[styles.primary, { backgroundColor: "#ECE8F6", flex: 1 }]}
          >
            <Text style={{ color: "#5C5475", fontWeight: "800" }}>Back</Text>
          </Pressable>
        )}
        <Pressable
          disabled={answers[step] === undefined}
          onPress={() =>
            step === qs.length - 1 ? finish() : setStep(step + 1)
          }
          style={[
            styles.primary,
            {
              backgroundColor:
                answers[step] === undefined ? "#C9C3D8" : "#7557E8",
              flex: 2,
            },
          ]}
        >
          <Text style={styles.primaryText}>
            {step === qs.length - 1 ? "Finish check-in" : "Continue  →"}
          </Text>
        </Pressable>
      </View>
      <Text style={[styles.caption, { marginTop: 18 }]}>
        This is an educational self-reflection, not a validated assessment or
        medical advice.
      </Text>
    </Screen>
  );
}
