import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'

const GreedyProgActivity = () => {

  const codeString = `
  #include <iostream>
  #include <vector>
  #include <algorithm>

// Structure to represent an activity
struct Activity {
    int start_time;
    int end_time;
};

// Function to compare activities based on end times
bool compareActivities(const Activity& a1, const Activity& a2) {
    return a1.end_time < a2.end_time;
}

// Function to find the maximum set of non-overlapping activities
std::vector<Activity> findMaxActivities(std::vector<Activity>& activities) {
    // Sort activities based on end times
    std::sort(activities.begin(), activities.end(), compareActivities);

    std::vector<Activity> maxActivities;
    maxActivities.push_back(activities[0]);  // Select the first activity

    int n = activities.size();
    int lastSelected = 0;

    // Iterate through the remaining activities
    for (int i = 1; i < n; i++) {
        // Check if the current activity is compatible with the last selected activity
        if (activities[i].start_time >= activities[lastSelected].end_time) {
            maxActivities.push_back(activities[i]);  // Select the compatible activity
            lastSelected = i;  // Update the last selected activity
        }
    }

    return maxActivities;
}

int main() {
    std::vector<Activity> activities = {
        {1, 4},
        {3, 5},
        {0, 6},
        {5, 7},
        {3, 9},
        {5, 9},
        {6, 10},
        {8, 11},
        {8, 12},
        {2, 14},
        {12, 16}
    };

    std::vector<Activity> maxActivities = findMaxActivities(activities);

    // Print the maximum set of non-overlapping activities
    std::cout << "Maximum set of non-overlapping activities:\n";
    for (const Activity& activity : maxActivities) {
        std::cout << "Start Time: " << activity.start_time << ", End Time: " << activity.end_time << "\n";
    }

    return 0;
}
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Activity Selection Problem</h4>
        <p className='text-justify pt-8'>The Activity Selection Problem is a classic optimization problem in computer science that involves selecting a maximum-sized set of mutually compatible activities from a given set of activities. Each activity has a start time and an end time, and the goal is to find the largest possible set of non-overlapping activities.</p>
        <p className='text-justify pt-4'>Formally, given a set of n activities, each represented by a pair (start_time, end_time), where start_time denotes the start time of the activity and end_time denotes the end time, the objective is to select the maximum number of activities that do not overlap.</p>
        <p className='text-justify pt-4'>To solve the Activity Selection Problem, a popular algorithm called Greedy Algorithm is often used. The Greedy Algorithm follows a greedy choice strategy, making locally optimal choices at each step in the hope of finding a globally optimal solution.</p>
        <p className='text-justify pt-4'>Here's a step-by-step explanation of the Greedy Algorithm for the Activity Selection Problem:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong></strong> First, sort the activities based on their end times in non-decreasing order. This step ensures that activities with earlier end times are considered first.</li>
          <li className='pt-2'><strong></strong> Since the activities are sorted by end times, the first activity in the sorted list will have the earliest end time. Select this activity as the first activity in the maximum set.</li>
          <li className='pt-2'><strong></strong>Starting from the second activity in the sorted list, iterate through the remaining activities one by one.</li>
          <li className='pt-2'><strong></strong>For each activity, check if its start time is greater than or equal to the end time of the previously selected activity. If the condition is satisfied, consider the current activity as compatible with the previous activity.</li>
          <li className='pt-2'><strong></strong>If an activity is compatible, add it to the maximum set of activities.</li>
          <li className='pt-2'><strong></strong>Repeat steps 4 and 5 until all activities have been considered.</li>
        </ul>
        <p className='text-justify pt-4'>By the end of this process, the maximum set of non-overlapping activities will be selected.</p>
        <p className='text-justify pt-4'>The Greedy Algorithm for the Activity Selection Problem works because the locally optimal choice of selecting the activity with the earliest end time at each step leads to a globally optimal solution. By selecting activities that finish early, we maximize the availability of time for the remaining activities.</p>
        <p className='text-justify pt-4'>The time complexity of the Greedy Algorithm for the Activity Selection Problem is O(n log n), where n is the number of activities. This complexity arises from the initial sorting of activities based on end times. The subsequent iteration through the sorted activities takes linear time.</p>
        <p className='text-justify pt-6'>Let's illustrate this algorithm with an example:</p>
        <p className='text-justify pt-4'>Suppose we have the following activities: Activity 1: (1, 4) Activity 2: (3, 5) Activity 3: (0, 6) Activity 4: (5, 7) Activity 5: (3, 9) Activity 6: (5, 9) Activity 7: (6, 10) Activity 8: (8, 11) Activity 9: (8, 12) Activity 10: (2, 14) Activity 11: (12, 16)</p>
        <p className='text-justify pt-4'><strong>Step 1: <br></br>Sort the activities based on their end times:</strong> Activity 3: (0, 6) Activity 1: (1, 4) Activity 10: (2, 14) Activity 2: (3, 5) Activity 5: (3, 9) Activity 4: (5, 7) Activity 6: (5, 9) Activity 7: (6, 10) Activity 11: (12, 16) Activity 9: (8, 12) Activity 8: (8, 11)</p>
        <p className='text-justify pt-4'><strong>Step 2: <br></br>Select the first activity:</strong> Activity 3: (0, 6) is the first activity.</p>
        <p className='text-justify pt-4'><strong>Step 3: <br></br>Iterate through the remaining activities:</strong> Activity 1: (1, 4) is compatible with Activity 3, so add it to the maximum set. Activity 10: (2, 14) is not compatible as its start time overlaps with Activity 1. Activity 2: (3, 5) is not compatible as its start time overlaps with Activity 1. Activity 5: (3, 9) is not compatible as its start time overlaps with Activity 1. Activity 4: (5, 7) is not compatible as its start time overlaps with Activity 1. Activity 6: (5, 9) is not compatible as its start time overlaps with Activity 1. Activity 7: (6, 10) is not compatible as its start time overlaps with Activity 1. Activity 11: (12, 16) is compatible with Activity 1, so add it to the maximum set. Activity 9: (8, 12) is not compatible as its start time overlaps with Activity 11. Activity 8: (8, 11) is compatible with Activity 11, so add it to the maximum set.</p>
        <p className='text-justify pt-4'>The maximum set of non-overlapping activities is: Activity 3, Activity 1, Activity 11, and Activity 8.</p>
        <p className='text-justify pt-4'>In this example, the maximum set of non-overlapping activities is selected using the Greedy Algorithm.</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this code, we define a structure <span className='text-green-500'>Activity</span> to represent an activity with start time and end time. The <span className='text-green-500'>compareActivities</span> function is used to compare activities based on their end times for sorting.</p>
        <p className='text-justify pt-4'>The <span className='text-green-500'>findMaxActivities</span> function takes a vector of activities as input and implements the Greedy Algorithm to find the maximum set of non-overlapping activities. It sorts the activities based on their end times, selects the first activity, and iterates through the remaining activities to select compatible activities.</p>
        <p className='text-justify pt-4'>In the <span className='text-green-500'>main</span> function, we create a vector of activities and call the <span className='text-green-500'>findMaxActivities</span> function to find the maximum set of non-overlapping activities. Finally, we print the results.</p>
        <p className='text-justify pt-4'>When you run this code, it will output the maximum set of non-overlapping activities based on the given input.</p>
        
      </article>
    </section>
    </div>
  )
}

export default GreedyProgActivity