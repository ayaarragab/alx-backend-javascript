import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const responseOne = await uploadPhoto();
  const responseTwo = await createUser();

  if (!responseOne || !responseTwo) {
    return { photo: null, user: null };
  }

  return { photo: responseOne, user: responseTwo };
}
