import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    modalContent:{
        flex:1,
        backgroundColor: 'white',
        position: 'relative',

      },

      
    scrollview:{
        flex: 1,
        paddingHorizontal: 16, // px-4 em Tailwind
        paddingVertical: 24,   // py-6 em Tailwind
      },

      relative:{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
        borderRadius:20
      },

      photo:{
        width: '100%',
        height: 288,           // h-72 em Tailwind (72*4=288)
        resizeMode: 'cover',
        borderRadius: 16,   
      },

      headerInfo:{
        position: 'absolute',
        flexDirection: 'row',
        top: 20, // top-5 em Tailwind (5*4=20)
        left: 0,
        right: 0, // inset-x-0 em Tailwind
        justifyContent: 'space-between',
        paddingHorizontal: 24, // px-6 em Tailwind
      },

      backButton:{
        width: 40, // w-10 em Tailwind (10*4=40)
        height: 40, // h-10 em Tailwind (10*4=40)
        borderRadius: 8, // rounded-md em Tailwind
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // bg-white
      },

      heartButton:{
        width: 40, // w-10 em Tailwind (10*4=40)
        height: 40, // h-10 em Tailwind (10*4=40)
        borderRadius: 8, // rounded-md em Tailwind
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00AAFF', // bg-[#06B2BE]
      },

      headerFooter: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 20, // bottom-5 em Tailwind (5*4=20)
        left: 0,
        right: 0, // inset-x-0 em Tailwind
        justifyContent: 'space-between',
        paddingHorizontal: 24, // px-6 em Tailwind
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8, // space-x-2 em Tailwind (2*4=8)
      },
      priceLevelText: {
        fontSize: 12, // text-[12px] em Tailwind
        fontWeight: 'bold',
        color: '#D1D5DB', // text-gray-100 (cinza claro)
      },
      priceText: {
        fontSize: 32, // text-[32px] em Tailwind
        fontWeight: 'bold',
        color: '#D1D5DB', // text-gray-100 (cinza claro)
      },
      openNowContainer: {
        paddingHorizontal: 8, // px-2 em Tailwind
        paddingVertical: 4,   // py-1 em Tailwind
        borderRadius: 8,      // rounded-md em Tailwind
        backgroundColor: '#fff', // Pode ajustar conforme necessário
      },
      openNowText: {
        fontSize: 14, // Ajustar conforme o estilo desejado
        color: '#000', // Ajustar conforme o estilo desejado
      },

      main: {
        marginTop: 24, // mt-6 em Tailwind (6*4=24)
      },
      nameText: {
        color: '#00AAFF', // text-[#428288]
        fontSize: 24, // text-[24px]
        fontWeight: 'bold',
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8, // mt-2 em Tailwind (2*4=8)
        marginLeft: 8, // space-x-2 em Tailwind (2*4=8)
      },
      locationText: {
        color: '#8C9EA6', // text-[#8C9EA6]
        fontSize: 20, // text-[20px]
        fontWeight: 'bold',
      },

      containerMainInfo: {
        marginTop: 16, // mt-4 em Tailwind (4*4=16)
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8, // space-x-2 em Tailwind (2*4=8)
      },
      containerMainPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8, // space-x-2 em Tailwind (2*4=8)
      },
      iconContainer: {
        width: 48, // w-12 em Tailwind (12*4=48)
        height: 48, // h-12 em Tailwind (12*4=48)
        borderRadius: 16, // rounded-2xl em Tailwind
        backgroundColor: '#FED7D7', // bg-red-100 (cor aproximada)
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      text: {
        color: '#515151',
        paddingLeft:10 // text-[#515151]
      },

      descriptionText: {
        marginTop: 16, // mt-4 em Tailwind (4*4=16)
        letterSpacing: 0.5, // tracking-wide em Tailwind (aproximado a 0.5)
        fontSize: 16, // text-[16px]
        fontWeight: '600', // font-semibold
        color: '#97A6AF', // text-[#97A6AF]
      },

      contact: {
        marginTop: 16, // mt-4 em Tailwind (4*4=16)
        backgroundColor: '#F3F4F6', // bg-gray-100 (aproximado)
        borderRadius: 16, // rounded-2xl em Tailwind
        paddingHorizontal: 16, // px-4 em Tailwind (4*4=16)
        paddingVertical: 8, // py-2 em Tailwind (2*4=8)
      },
      infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8, // space-y-2 em Tailwind (2*4=8)
        marginRight: 24, // space-x-6 em Tailwind (6*4=24)
      },
      textContact: {
        fontSize: 18, // text-lg em Tailwind
        color: '#000',
        padding:10 // Ajustar conforme o estilo desejado
      },
      bookNowContainer: {
        marginTop: 16, // mt-4 em Tailwind
        paddingHorizontal: 16, // px-4 em Tailwind
        paddingVertical: 16, // py-4 em Tailwind
        borderRadius: 12, // rounded-lg em Tailwind
        backgroundColor: '#00AAFF', // bg-[#06B2BE]
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48, // mb-12 em Tailwind (12*4=48)
      },
      bookNowText: {
        fontSize: 24, // text-3xl em Tailwind
        fontWeight: '600', // font-semibold
        textTransform: 'uppercase', // uppercase
        letterSpacing: 1, // tracking-wider (aproximado a 1)
        color: '#F3F4F6', // text-gray-100 (aproximado)
      },

      addressText:{
        padding:10
      }
})

export default styles;