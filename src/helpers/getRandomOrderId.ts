import { customAlphabet } from "nanoid";

export const getRandomOrderId = () => {
  const alphabet = "123456789abcdef";
  const size = 16;
  const generator = customAlphabet(alphabet, size);
  return generator();
};

export default getRandomOrderId;
