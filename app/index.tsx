import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { db } from "~/db";
import { users } from "~/db/schema";

export default function Screen() {
  const { data } = useLiveQuery(
    db.query.users.findFirst({
      columns: {
        name: true,
      },
    }),
  );

  const inserData = async () => {
    await db.insert(users).values({
      name: "Aman",
      email: "amanvarshney.work@gmail.com",
    });
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text>{data?.name}</Text>
      </View>
      <Button onPress={inserData}>
        <Text>Add To Db</Text>
      </Button>
    </View>
  );
}
