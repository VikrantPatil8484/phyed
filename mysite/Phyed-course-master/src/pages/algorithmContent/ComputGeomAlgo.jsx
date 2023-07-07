import React from "react";
import CodeHighlighter from "../../components/CodeHighlighter";
const ComputGeomAlgo = () => {
  const codeString = `
  #include <iostream>
  #include <vector>
  #include <algorithm>
  #include <stack>
  using namespace std;
  struct Point {
    int x, y;
    Point(int _x, int _y) : x(_x), y(_y) {}
  };
  // Orientation function to determine the orientation of three points
  int orientation(const Point& p, const Point& q, const Point& r) {
  int val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (val == 0) {
    return 0; // Collinear
  } else if (val > 0) {
    return 1; // Clockwise
  } else {
    return 2; // Counterclockwise
  }
}
  // Comparison function to sort points based on polar angle
  bool comparePoints(const Point& p1, const Point& p2) {
  int o = orientation(Point(0, 0), p1, p2);
  if (o == 0) {
    // If two points are collinear, choose the one that is farther from the origin
  return (p1.x * p1.x + p1.y * p1.y) < (p2.x * p2.x + p2.y * p2.y);
  } else {
    return (o == 2); // Sort in counterclockwise order
  }
}
  // Convex Hull algorithm using Graham's scan
  vector<Point> convexHull(vector<Point>& points) {

  int n = points.size();
  if (n < 3) {
    return {}; // Convex hull not possible with less than 3 points
  }
  // Find the point with the lowest y-coordinate (ties broken by lowest x-coordinate)
  int minY = points[0].y;
  int minIdx = 0;
  for (int i = 1; i < n; i++) {
    int y = points[i].y;
  if ((y < minY) || (y == minY && points[i].x < points[minIdx].x)) {
    minY = y;
    minIdx = i;
  }
}
  // Swap the lowest point with the first point
  swap(points[0], points[minIdx]);
  // Sort the points based on polar angle with respect to the
  lowest point
  sort(points.begin() + 1, points.end(), comparePoints);
  // Initialize the stack to hold the convex hull points
  stack<Point> st;
  st.push(points[0]);
  st.push(points[1]);
  // Compute the convex hull by iterating over the remaining points
  for (int i = 2; i < n; i++) {
    while (st.size() >= 2) {
      Point p2 = st.top();
    st.pop();
    Point p1 = st.top();
    if (orientation(p1, p2, points[i]) == 2) {
      st.push(p2);
      break;
    }
}
  st.push(points[i]);
  }
  // Convert the stack to a vector and return the convex hull points
  vector<Point> convexHullPoints;
  while (!st.empty()) {
    convexHullPoints.push_back(st.top());
    st.pop();
  }
  return convexHullPoints;
}
  // Helper function to print the points in the convex hull
  void printConvexHull(const vector<Point>& convexHullPoints) {
    for (const Point& p : convexHullPoints) {
      cout << "(" << p.x << ", " << p.y << ") ";
    }
  cout << endl;
}
  int main() {
  vector<Point> points = {{0, 3}, {2, 2}, {1, 1}, {2, 1},{3, 0}, {0, 0}, {3, 3}};
  vector<Point> convexHullPoints = convexHull(points);
  cout << "Convex Hull Points: ";
  printConvexHull(convexHullPoints);
  return 0;
}
  `;

  return (
    <div>
      <section className="p-4 text-md text-justify">
        <article className="mt-6">
          <h4 className="p-2 text-lg font-bold rounded-md card-bg w-full">
            Computational Geometry Algorithms :
          </h4>
          <br></br>
          <p className="text-justify pt-4">
            Computational Geometry is a branch of computer science that focuses
            on the study of algorithms and data structures for solving geometric
            problems. It involves the manipulation, analysis, and computation of
            geometric objects such as points, lines, polygons, and curves.
            Computational Geometry algorithms are used in various applications,
            including computer graphics, robotics, geographic information
            systems (GIS), and computer-aided design (CAD). Here are some
            important computational geometry algorithms:
          </p>

          <ul className="list-decimal px-10 ">
            <li className="pt-4">
              Convex Hull: The Convex Hull algorithm is used to find the
              smallest convex polygon that contains a given set of points in the
              plane. The most commonly used algorithm for finding the Convex
              Hull is the Graham's scan algorithm, which has a time complexity
              of O(n log n) for n points.
            </li>
            <li className="pt-4">
              Line Intersection: The Line Intersection algorithm determines
              whether two lines in the plane intersect and, if they do,
              calculates the point of intersection. One popular algorithm for
              line intersection is the Bentley–Ottmann algorithm, which has a
              time complexity of O((n + k) log n), where n is the number of
              input line segments, and k is the number of intersections.
            </li>
            <li className="pt-4">
              Polygon Triangulation: Polygon Triangulation involves dividing a
              polygon into triangles. Triangulation algorithms are used in
              various applications, such as mesh generation, graphics rendering,
              and computational physics. One well-known algorithm for
              triangulating simple polygons is the Ear Clipping algorithm, which
              has a time complexity of O(n^2) for n vertices.
            </li>

            <li className="pt-4">
              Closest Pair: The Closest Pair algorithm finds the pair of points
              with the smallest distance among a set of points in the plane. The
              divide-and-conquer approach is commonly used for this problem,
              with the most famous algorithm being the O(n log n) time
              complexity algorithm based on the merge sort technique.
            </li>
            <li className="pt-4">
              Voronoi Diagram: The Voronoi Diagram is a partitioning of a plane
              into regions based on the distance to a set of points. Each region
              consists of all points closer to a particular input point than to
              any other input point. Algorithms for constructing Voronoi
              Diagrams include Fortune's algorithm and the incremental
              algorithm, with time complexities of O(n log n) and O(n^2),
              respectively.
            </li>
            <li className="pt-4">
              Delaunay Triangulation: The Delaunay Triangulation is a
              triangulation of a set of points in a plane, such that no point is
              inside the circumcircle of any triangle. The Delaunay
              Triangulation has several desirable properties and is widely used
              in various applications. Algorithms for constructing Delaunay
              Triangulations include the Bowyer–Watson algorithm and the
              incremental algorithm, with time complexities of O(n^2) and O(n
              log n), respectively.
            </li>
          </ul>
          <p className="text-justify pt-4">
            Here's an example of a computational geometry algorithm in C++: the
            Convex Hull algorithm using Graham's scan:
          </p>

          <CodeHighlighter>{codeString}</CodeHighlighter>

          <p className="text-justify pt-4">
            In this example, we define a{" "}
            <span className="code-text italic text-sm">Point</span> struct to
            represent 2D points with{" "}
            <span className="code-text italic text-sm">x</span> and{" "}
            <span className="code-text italic text-sm">y</span> coordinates. The{" "}
            <span className="code-text italic text-sm">orientation</span>{" "}
            function calculates the orientation of three points (collinear,
            clockwise, or counterclockwise).
          </p>

          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">comparePoints</span>{" "}
            function is used as a comparison function to sort the points in
            counterclockwise order based on their polar angle with respect to
            the lowest point.
          </p>
          <p className="text-justify pt-4">
            The <span className="code-text italic text-sm">convexHull</span>{" "}
            function implements Graham's scan algorithm to find the convex hull
            of a set of points. It first finds the point with the lowest
            y-coordinate and then sorts the remaining points based on their
            polar angle. It uses a stack to compute the convex hull by checking
            the orientation of each point with the top two points on the stack.
          </p>
          <p className="text-justify pt-4">
            Finally, the <span className="code-text italic text-sm">main</span>{" "}
            function demonstrates the usage of the{" "}
            <span className="code-text italic text-sm">convexHull</span>
            function by finding the convex hull of a set of points and printing
            the resulting convex hull point
          </p>
          {/* <br></br> */}
        </article>
      </section>
    </div>
  );
};

export default ComputGeomAlgo;
