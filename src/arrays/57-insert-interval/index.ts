/**
 * 57. Insert Interval
 *
 * You are given an array of non-overlapping intervals 
 * intervals where intervals[i] = [starti, endi] 
 * represent the start and the end of the ith interval
 * and intervals is sorted in ascending order by start[i]. 
 * You are also given an interval newInterval = [start, end] 
 * that represents the start and end of another interval.
 *
 *
 * Insert newInterval into intervals such that intervals 
 * is still sorted in ascending order by start[i]
 * and intervals still does not have any overlapping 
 * intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 * 
 * Note that you don't need to modify intervals in-place. 
 * You can make a new array and return it.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */
function insert(intervals: number[][], newInterval: number[]): number[][]{
  const aux: number[][] = [];
  const res: number[][] = [];
  let inserted: boolean = false; 

  for(let i: number = 0; i < intervals.length; i++){
    const curr: number[] = intervals[i];
    
    if(!inserted && newInterval && curr[0] > newInterval[0] ){
      aux.push( newInterval );
      inserted = true;
    }

    aux.push(curr);
  }

  if(!inserted) {
    aux.push(newInterval);
    inserted = true;
  }

  for(const schedule of aux) {
    const last: number[] = res[res.length - 1];

    if(last && schedule[0] <= last[1]) {
      last[1] = Math.max(last[1], schedule[1]);
      continue;
    }

    res.push(schedule);
  }

  return res;
};

export default insert;
