import React from 'react';
import HeartIcon from '../../assets/heart.svg';
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from './StyledComponents';
import {AirbnbRating} from 'react-native-ratings';

const ProductCard = () => {
  return (
    <StyledView className="relative w-[150px] h-[260px] justify-start mt-[22px]">
      <StyledView className="justify-center items-center absolute top-[8px] left-[9px] z-10 bg-black rounded-[30px] w-[40px] h-[24px]">
        <StyledText className="text-white font-semibold text-[11px]">
          New
        </StyledText>
      </StyledView>
      <StyledTouchableOpacity className="justify-center shadow-md shadow-gray-500 items-center absolute bottom-[60px] right-[1px] z-10 bg-white rounded-full w-[36px] h-[36px]">
        <HeartIcon />
      </StyledTouchableOpacity>
      <StyledView className="w-full h-[184px]">
        <StyledImage
          className="rounded-lg"
          source={require('../../assets/dressimg.png')}
        />
      </StyledView>
      <StyledView className="flex flex-row justify-start items-center h-[14px] w-[100px] mt-[5px]">
        <AirbnbRating
          reviews={[]}
          count={5}
          size={16}
          isDisabled={true}
          readonly={true}
          defaultRating={5}
        />
      </StyledView>
      <StyledText className="mt-[6px] text-[11px] text-[#9B9B9B]">
        Dorothy Perkins
      </StyledText>
      <StyledText className="mt-[5px] text-[16px] text-[#222222] font-semibold">
        Evening Dress
      </StyledText>
      <StyledView className="flex flex-row gap-[4px] justify-start">
        <StyledText className="text-[#9B9B9B] text-[14px] font-medium line-through">
          15 $
        </StyledText>
        <StyledText className="text-[#DB3022] text-[14px] font-medium">
          12$
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default ProductCard;
