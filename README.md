## Skin-O-Cure
A Machine Learning model used to predict possible Skin Diseases 
This project aims to develop a machine-learning model for detecting various skin diseases using image analysis. The model is trained on a dataset of skin disease images and is capable of classifying new images into different disease categories.

<h2> Table of Contents </h2>

- [Overview](#overview)
- [Dataset](#Dataset)
- [Model Architecture ](#ModelArchitecture )
- [Use case](#Usecase)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)

<h2> Overview </h2>

Skin diseases are common and can vary widely in severity and symptoms. Early detection and diagnosis are crucial for effective treatment. This project leverages machine learning techniques to assist in the automated detection of skin diseases, which can help healthcare professionals in timely diagnosis.


https://www.loom.com/share/ba577fafd36f4f738e251d5d7261dc71?sid=ef383703-c173-41f0-ad15-b1576607ff17

<h2> Dataset </h2>

The dataset used for training the model consists of images of various skin diseases, including eczema, psoriasis, melanoma, and acne. The dataset is preprocessed to improve the model's performance and generalization. Currently, this model predicts only these kinds of Skin Diseases. 
- Acne / Rosacea
- Melanocytic Nevus
- Eczema
- Dermatofibroma
- Vascular Lesion
- Ringworm / Tinea
- Melanoma

<h2> Model Architecture </h2>

The model architecture used for this project is based on a convolutional neural network (CNN). CNNs are well-suited for image classification tasks due to their ability to learn hierarchical features from images. Transfer learning is employed using a pre-trained CNN model to leverage features learned from a large dataset.


## How to use the Website?
1) Go to the deployed URL- (https://skin-diseases-detection.vercel.app/)
2) Front Page will look something like this
3) ![uploaded](https://github.com/harshnayangithub/Skin_O_Care/assets/126700987/470d7058-5519-4e99-a636-7ee985021ead)
4) Click on the Login/SignUp section. Then click on the register if you are a first-time user (Firebase Authentication)
5) ![Screen](https://github.com/harshnayangithub/Skin_O_Care/assets/126700987/d56b75b9-7cd1-4d41-aa1e-7c9f633f55cc)
6) Now, that you are logged in head over to the Diagnosis section, Upload your image and click on the upload button.
7) ![Screen](https://github.com/harshnayangithub/Skin_O_Care/assets/126700987/3b153dd9-da17-4753-9061-3777259e35f9)
8) ![Screens](https://github.com/harshnayangithub/Skin_O_Care/assets/126700987/3cb0992b-cf49-435f-a9e2-56a8f6c44ec6)
9) If you want to book an appointment with the dermatologist (dummy) click on the Book Appointment button and fill in the required details and make the payment.
10) ![Screen](https://github.com/harshnayangithub/Skin_O_Care/assets/126700987/efcf5569-e2b1-4c61-850e-70b2d7d55aa9)

<h2> Future Work </h2>

- Improve model performance with additional data and fine-tuning.
- Develop a mobile application for easy access to the model.
- Incorporate real-time image analysis for faster diagnosis.

<h2> Contributing </h2>

Contributions to this project are welcome. Please fork the repository, make your changes, and submit a pull request.

