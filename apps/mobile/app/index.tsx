import { View, Text, TouchableOpacity } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="p-6 bg-white rounded-2xl shadow-lg w-3/4 items-center">
        <Text className="text-2xl font-bold text-green-600 mb-2">Grocery Helper 🥦</Text>
        <Text className="text-gray-500 text-center mb-6">
          Your monorepo is working perfectly with NativeWind!
        </Text>

        <TouchableOpacity
          className="bg-blue-500 px-6 py-3 rounded-full active:bg-blue-600"
          onPress={() => console.log('Pressed!')}
        >
          <Text className="text-white font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
