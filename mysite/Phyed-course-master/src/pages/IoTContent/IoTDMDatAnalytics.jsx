import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";

const IoTDMDatAnalytics = () => {
  const codeString = `
  import matplotlib.pyplot as plt
  
  def preprocess_data():
      temperatures = []
  
      with open('temperature_data.txt', 'r') as file:
          lines = file.readlines()
          for line in lines:
              temperature = float(line.strip())
              temperatures.append(temperature)
  
      return temperatures
  
  def plot_temperature_data(temperatures):
      plt.plot(temperatures)
      plt.xlabel('Time')
      plt.ylabel('Temperature')
      plt.title('Temperature Data')
      plt.show()
  
  temperatures = preprocess_data()
  plot_temperature_data(temperatures)
  
  `;
  const codeString1 = `
  import statistics
  
  def detect_anomalies(temperatures):
      average = statistics.mean(temperatures)
      standard_deviation = statistics.stdev(temperatures)
      anomalies = []
  
      for temperature in temperatures:
          z_score = (temperature - average) / standard_deviation
          if abs(z_score) > 3:  # Threshold for anomaly detection
              anomalies.append(temperature)
  
      return anomalies
  
  temperatures = preprocess_data()
  anomalies = detect_anomalies(temperatures)
  print("Anomalies:", anomalies)
  
  `;
  const codeString2 = `
  from sklearn.linear_model import LinearRegression
  
  def predict_temperature(temperatures, future_time):
      X = [[i] for i in range(len(temperatures))]
      y = temperatures
  
      model = LinearRegression()
      model.fit(X, y)
  
      future_X = [[len(temperatures) + future_time]]
      future_temperature = model.predict(future_X)
  
      return future_temperature[0]
  
  temperatures = preprocess_data()
  future_temperature = predict_temperature(temperatures, future_time=5)
  print("Predicted Future Temperature (after 5 time units):", future_temperature)
  
  `;
  return (
    <div>
      <section className="p-4 md:text-base text-justify text-sm">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Data analytics techniques for extracting insights from IoT data
          </h4>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">1. Descriptive Analytics:</span>
            Descriptive analytics focuses on summarizing and describing the data
            we have collected. It helps us understand what has happened in the
            past or what is currently happening. One common technique used in
            descriptive analytics is data visualization, which means
            representing data in the form of charts, graphs, or other visual
            representations.
          </p>

          <h3 className="p-2 text-lg font-bold">
            Let's continue with our example of temperature data and use data
            visualization to analyze it:
          </h3>
          <CodeHighlighter>{codeString}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we reuse the preprocess_data function from the
            previous example to read the temperature data from the file. Then,
            we define a new function called plot_temperature_data that uses the
            matplotlib library to create a line plot of the temperature data. We
            set the x-axis as time and the y-axis as temperature, add labels to
            the axes, and give the plot a title. Finally, we display the plot
            using the plt.show() function.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">2. Diagnostic Analytics:</span>
            Diagnostic analytics aims to answer the question "Why did it
            happen?" It involves analyzing the data to understand the causes and
            reasons behind certain events or patterns. One commonly used
            technique in diagnostic analytics is anomaly detection, which helps
            identify abnormal or unexpected data points.
          </p>
          <h3 className="p-2 text-lg font-bold">
            Let's modify our previous code to include an anomaly detection
            technique called z-score:
          </h3>
          <CodeHighlighter>{codeString1}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the statistics module to calculate the average
            and standard deviation of the temperature data. The z-score of each
            temperature is calculated by subtracting the average and dividing by
            the standard deviation. If the absolute value of the z-score exceeds
            a certain threshold (in this case, 3), the temperature is considered
            an anomaly and added to the anomalies list. Finally, we print the
            anomalies.
          </p>
          <p className="text-justify p-2 pt-4">
            <span className="font-semibold">3. Predictive Analytics:</span>
            Predictive analytics focuses on predicting future outcomes based on
            historical data. It uses machine learning algorithms to learn
            patterns from the data and make predictions. Let's use a simple
            linear regression algorithm to predict future temperature values.
          </p>
          <CodeHighlighter>{codeString2}</CodeHighlighter>
          <p className="text-justify p-2 pt-4">
            In this code, we use the LinearRegression class from the sklearn
            (scikit-learn) library to create a linear regression model. We set
            the past time values (X) as the sequence of numbers 0, 1, 2, ...,
            and the corresponding temperature values (y) as the actual
            temperatures. The model is trained on this historical data. Then, we
            use the model to predict the future temperature by providing a new X
            value (which represents the future time). Finally, we print the
            predicted future temperature.
          </p>
          <p className="text-justify p-2 pt-4">
            These are simplified examples of descriptive, diagnostic, and
            predictive analytics techniques applied to IoT data. In real-world
            scenarios, more advanced techniques and algorithms can be used, and
            the data analysis process can be more complex.
          </p>
        </article>
      </section>
    </div>
  );
};

export default IoTDMDatAnalytics;
