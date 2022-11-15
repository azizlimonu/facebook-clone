import { uploadImage as uploadPicture, uploadPost as uploadPostData } from "../../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start")
    await uploadPicture(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await uploadPostData(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
