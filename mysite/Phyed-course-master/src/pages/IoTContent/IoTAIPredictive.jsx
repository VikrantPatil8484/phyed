import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter';


const IoTAIPredictive = () => {
  const codeString = `
  # Import the necessary libraries
  from sklearn.ensemble import IsolationForest
  
  # Sensor data: temperature, humidity, compressor usage (input)
  sensor_data = [[4, 40, 2000], [5, 45, 2200], [3, 38, 2100], [6, 42, 2300]]
  # Label: 1 for normal, -1 for anomaly
  labels = [1, 1, 1, -1]
  
  # Create an isolation forest model
  model = IsolationForest()
  
  # Train the model
  model.fit(sensor_data)
  
  # Predict anomalies for new sensor data
  new_sensor_data = [[7, 47, 2400]]
  prediction = model.predict(new_sensor_data)
  
  # Display the prediction
  if prediction[0] == -1:
      print("Anomaly detected in the refrigerator.")
  else:
      print("Refrigerator is functioning normally.")
  `


  return (
    <div>
    <section className='p-4 md:text-base text-justify text-sm'>
           <article className='mt-6'>
           <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Predictive maintenance and anomaly detection in IoT systems</h4>
           <p className='text-justify p-2 pt-4'><b>1.Predictive Maintenance:</b> Predictive maintenance is a technique used in IoT systems to predict when a machine or device is likely to fail or require maintenance. By analyzing data from sensors and devices, we can identify patterns or indicators that suggest a potential failure. This helps us schedule maintenance before a breakdown occurs, reducing downtime and costs.</p>
           <p className='text-justify p-2 pt-4'><b>2.Anomaly Detection: </b>Anomaly detection is the process of identifying patterns or data points that deviate significantly from the norm or expected behavior. In an IoT system, anomalies could indicate potential issues or abnormalities in the system's performance, such as a sensor malfunction or unusual behavior in a connected device.</p>
           <p className='text-justify p-2 pt-4'><b>3.Predictive Maintenance and Anomaly Detection in IoT:</b> Combining predictive maintenance and anomaly detection in IoT systems can help us proactively identify and address potential problems. Here's a simplified example to demonstrate how it works:</p>
           <p className='text-justify p-2 pt-4'>Imagine we have a smart refrigerator that monitors temperature, humidity, and compressor usage. We want to predict when the refrigerator might malfunction or when its performance is abnormal.</p>
           
           <ul className='list-disc px-10'>
           <li className='pt-4'>We collect historical data from the refrigerator's sensors, including temperature, humidity, and compressor usage over time.</li>
           <li className='pt-4'>We use this data to train a machine learning model for predictive maintenance. The model learns the normal patterns of sensor data when the refrigerator is functioning well.</li>
           <li className='pt-4'>Once the model is trained, we can input new sensor data into the model, and it will predict whether the refrigerator is likely to malfunction or if its performance is abnormal.</li>
          </ul>
          <p className='text-justify p-2 pt-4'>Here's a simplified code example using Python to demonstrate this:</p>

                  <CodeHighlighter>
                      {codeString} 
                    </CodeHighlighter>
           <p className='text-justify p-2 pt-4'>In this code, we have sensor data as the input (temperature, humidity, and compressor usage) and labels indicating whether the data is normal or an anomaly. We create an isolation forest model and train it using the sensor data. Then, we can use the trained model to predict anomalies for new sensor data.</p>


           

           </article>
       </section>
       </div>
  )
}

export default IoTAIPredictive