import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTAIMachine = () => {
  const codeString = ` 
  # Import the necessary libraries
  from sklearn.model_selection import train_test_split
  from sklearn.tree import DecisionTreeClassifier
  
  # Sensor data: soil moisture, temperature, sunlight (input)
  sensor_data = [[0.6, 25, 500], [0.3, 22, 300], [0.8, 28, 800], [0.4, 23, 400]]
  # Watering needs (output)
  watering_needs = [1, 0, 1, 0]  # 1 means watering needed, 0 means no watering needed
  
  # Split the data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(sensor_data, watering_needs, test_size=0.2)
  
  # Create a decision tree classifier
  clf = DecisionTreeClassifier()
  
  # Train the model
  clf.fit(X_train, y_train)
  
  # Predict watering needs for new sensor data
  new_sensor_data = [[0.5, 24, 350]]
  prediction = clf.predict(new_sensor_data)
  
  # Display the prediction
  if prediction[0] == 1:
      print("Watering needed for the plants.")
  else:
      print("No watering needed for the plants.")
  `


  const codeString1 = ` 
  # Import the necessary libraries
  import numpy as np
  from keras.models import Sequential
  from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
  
  # Image data: animal images (input)
  animal_images = np.array([...])  # Array of animal images
  # Animal labels (output)
  animal_labels = np.array([0, 1, 1, 2, ...])  # 0 for cats, 1 for dogs, 2 for birds, ...
  
  # Create a sequential model
  model = Sequential()
  
  # Add convolutional and pooling layers
  model.add(Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(64, 64, 3)))
  model.add(MaxPooling2D(pool_size=(2, 2)))
  model.add(Conv2D(64, kernel_size=(3, 3), activation='relu'))
  model.add(MaxPooling2D(pool_size=(2, 2)))
  
  # Flatten the image data
  model.add(Flatten())
  
  # Add a fully connected layer and output layer
  model.add(Dense(128, activation='relu'))
  model.add(Dense(3, activation='softmax'))  # 3 output classes (cats, dogs, birds)
  
  # Compile the model
  model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
  
  # Train the model
  model.fit(animal_images, animal_labels, epochs=10)
  
  # Predict animal type for a new image
  new_image = np.array([...])  # New image to predict the animal type
  prediction = model.predict_classes(new_image)
  
  # Display the prediction
  if prediction[0] == 0:
      print("The animal in the image is a cat.")
  elif prediction[0] == 1:
      print("The animal in the image is a dog.")
  else:
      print("The animal in the image is a bird.")
  `

  const codeString2 = ``

  return (
    <div><section className='p-4 md:text-base text-justify text-sm'>
    <article className='mt-6'>
         <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Machine learning and deep learning for IoT data analytics</h4>

         
           <p className='text-justify p-2 pt-4'><b>1.Machine Learning:</b> Machine learning is a type of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. It's like teaching a computer to recognize patterns and make sense of information on its own.</p>
           <p className='text-justify p-2 pt-4'><b>2.Deep Learning: </b>Deep learning is a subset of machine learning that is inspired by the structure and function of the human brain. It involves using artificial neural networks, which are complex networks of interconnected nodes called neurons, to learn and understand data. Deep learning is particularly good at handling large amounts of data and finding intricate patterns.</p>
           <p className='text-justify p-2 pt-4'><b>3.IoT Data Analytics: </b>IoT devices generate massive amounts of data from various sensors and sources. IoT data analytics involves extracting valuable insights and knowledge from this data to make informed decisions or take appropriate actions.</p>
           <p className='text-justify p-2 pt-4'><b>4.Machine Learning for IoT Data Analytics:</b> Machine learning can be applied to IoT data analytics to uncover patterns, trends, or anomalies in the data. Here's a simplified example to demonstrate how machine learning can be used:</p>
          
          <p className='text-justify p-2 pt-4'>Imagine we have a smart garden with sensors that measure soil moisture, temperature, and sunlight. We want to predict when to water the plants based on this data.</p>

          <ul className='list-disc px-10'>
           <li className='pt-4'>We collect historical data from the sensors, including the soil moisture levels, temperature, and sunlight over time.</li>
           <li className='pt-4'>We use this data to train a machine-learning model. The model learns the relationship between the sensor data and the watering needs of the plants.</li>
           <li className='pt-4'>Once the model is trained, we can input new sensor data (current readings) into the model, and it will predict whether the plants need watering or not.</li>
          </ul>
          <p className='text-justify p-2 pt-4'>Here's a simplified code example using Python to demonstrate this:</p>
          
             <CodeHighlighter>
               {codeString} 
             </CodeHighlighter>
             <p className='text-justify p-2 pt-4'>In this code, we have sensor data as the input (soil moisture, temperature, and sunlight) and the corresponding watering needs as the output. We split the data into training and testing sets, create a decision tree classifier, and train the model using the training data. Then, we can use the trained model to predict the watering needs for new sensor data.</p>
             <p className='text-justify p-2 pt-4'><b>5. Deep Learning for IoT Data Analytics: </b>Deep learning, with its ability to handle complex patterns, can be used for more advanced IoT data analytics tasks. For example, it can be applied to image recognition tasks using IoT cameras or speech recognition tasks using IoT microphones.</p>

             <p className='text-justify p-2 pt-4'>To explain the concept to a kid, let's take the example of a smart camera that detects different types of animals in the backyard. The camera captures images, and we want to use deep learning to recognize the animals.</p>

            <ul className='list-disc px-10'>
            <li className='pt-4'>We collect a large dataset of images containing various animals, such as cats, dogs, and birds.</li>
            <li className='pt-4'>We use this dataset to train a deep learning model, such as a convolutional neural network (CNN). The model learns to recognize patterns in the images that distinguish different animals.</li>
            <li className='pt-4'>Once the model is trained, we can input new images into the model, and it will predict the type of animal in the image.</li>
            </ul>
            <p className='text-justify p-2 pt-4'>Writing code for deep learning is more complex, but the basic idea involves creating and training a neural network. Here's a simplified example using the Keras library in Python:</p>

             <CodeHighlighter>
               {codeString1} 
             </CodeHighlighter>
       <p className='text-justify p-2 pt-4'>In this code, we create a sequential model using the Keras library and add layers to define the architecture of the neural network. We compile the model, train it using the image data and labels, and then use the trained model to predict the animal type for a new image.</p>

        

    </article>
</section>
</div>
  )
}

export default IoTAIMachine