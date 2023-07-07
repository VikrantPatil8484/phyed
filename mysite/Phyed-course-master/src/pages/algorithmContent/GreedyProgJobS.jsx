import React from 'react'
import CodeHighlighter from '../../components/CodeHighlighter'
const GreedyProgJobS = () => {

  const codeString = `
  #include <iostream>
  #include <vector>
  #include <algorithm>
  
  // Structure to represent a job
  struct Job {
      int start_time;
      int finish_time;
  };
  
  // Function to compare jobs based on finish times
  bool compareJobs(const Job& job1, const Job& job2) {
      return job1.finish_time < job2.finish_time;
  }
  
  // Function to find the maximum set of non-overlapping jobs
  std::vector<Job> findMaxJobs(std::vector<Job>& jobs) {
      // Sort jobs based on finish times
      std::sort(jobs.begin(), jobs.end(), compareJobs);
  
      std::vector<Job> maxJobs;
      maxJobs.push_back(jobs[0]);  // Select the first job
  
      int n = jobs.size();
      int lastSelected = 0;
  
      // Iterate through the remaining jobs
      for (int i = 1; i < n; i++) {
          // Check if the current job is compatible with the last selected job
          if (jobs[i].start_time >= jobs[lastSelected].finish_time) {
              maxJobs.push_back(jobs[i]);  // Select the compatible job
              lastSelected = i;  // Update the last selected job
          }
      }
  
      return maxJobs;
  }
  
  int main() {
      std::vector<Job> jobs = {
          {1, 3},
          {2, 5},
          {4, 7},
          {6, 9},
          {8, 10}
      };
  
      std::vector<Job> maxJobs = findMaxJobs(jobs);
  
      // Print the maximum set of non-overlapping jobs
      std::cout << "Maximum set of non-overlapping jobs:\n";
      for (const Job& job : maxJobs) {
          std::cout << "Start Time: " << job.start_time << ", Finish Time: " << job.finish_time << "\n";
      }
  
      return 0;
  }
  `
  return (

    <div>
    <section className='p-4 text-md text-justify'>
      <article className='mt-6'>
        <h4 className='p-2 text-lg font-bold rounded-md card-bg w-full'>Job Scheduling Problem</h4>
        <p className='text-justify pt-8'>The Job Scheduling Problem, also known as the Interval Scheduling Problem, is a classic optimization problem that involves scheduling a set of jobs with start and finish times to maximize the number of jobs completed without overlapping.</p>
        <p className='text-justify pt-4'>Here's a step-by-step explanation of the Job Scheduling Problem:</p>
        <ul className='list-decimal px-10'>
          <li className='pt-2'><strong>Problem Definition: </strong> Given a set of jobs, each with a start time and finish time, the objective is to select a subset of jobs that do not overlap and maximize the number of jobs selected.</li>
          <li className='pt-2'><strong>Sorting: </strong> Sort the jobs based on their finish times in non-decreasing order. This sorting step ensures that the jobs with earlier finish times are considered first.</li>
          <li className='pt-2'><strong>Greedy Approach: </strong>Apply a greedy approach to select the jobs. Start with an empty set of selected jobs and iteratively consider each job in the sorted order.</li>
          <ul className='list-disc px-10'>
            <li className='pt-2'>Select the first job from the sorted list and add it to the selected jobs set.</li>
            <li className='pt-2'>For each subsequent job, if its start time is greater than or equal to the finish time of the previously selected job, add it to the selected jobs set.</li>
            <li className='pt-2'>Continue this process until all jobs have been considered.</li>
          </ul>
          <li className='pt-2'>The selected jobs set represents the maximum set of non-overlapping jobs that can be scheduled.</li>
          <li className='pt-2'>Implementation in C++:</li>
        </ul>
        <p className='text-justify pt-4'>Here's the C++ code implementation of the Job Scheduling Problem using the greedy approach:</p>
        <CodeHighlighter>
          {codeString}
        </CodeHighlighter>
        <p className='text-justify pt-4'>In this code, we define a structure Job to represent a job with start time and finish time. The compareJobs function is used to compare jobs based on their finish times for sorting.</p>
        <p className='text-justify pt-4'>The findMaxJobs function takes a vector of jobs as input and implements the greedy approach to find the maximum set of non-overlapping jobs. It sorts the jobs based on their finish times, selects the first job, and iterates through the remaining jobs, selecting compatible jobs that do not overlap with the previously selected job.</p>
        <p className='text-justify pt-4'>In the main function, we provide a sample set of jobs, call the findMaxJobs function to find the maximum set of non-overlapping jobs, and then print the start and finish times of the selected jobs.</p>
        <p className='text-justify pt-4'>The time complexity and space complexity of the Job Scheduling Problem implementation using the greedy approach are as follows:</p>
        <p className='text-justify pt-4 font-bold'>Time Complexity:</p>
        <ul className='list-disc px-10'>
          <li className='pt-2'>Sorting the jobs based on finish times requires O(n log n) time, where n is the number of jobs. This is because the sorting step has a time complexity of O(n log n) in the worst case.</li>
          <li className='pt-2'>Iterating through the sorted jobs to select compatible jobs takes O(n) time, as each job is processed once.</li>
        </ul>
        <p className='text-justify pt-4'>Therefore, the overall time complexity of the Job Scheduling Problem implementation is O(n log n), dominated by the sorting step.</p>
        <ul className='list-disc px-10'>
          <li className='pt-2'>The space complexity is O(n) since we need to store the sorted jobs in a vector and the maximum set of non-overlapping jobs in another vector.</li>
          <li className='pt-2'>Additionally, a constant amount of extra space is required for variables used in the algorithm.</li>
        </ul>
      
      </article>
    </section>
    </div>
  )
}

export default GreedyProgJobS