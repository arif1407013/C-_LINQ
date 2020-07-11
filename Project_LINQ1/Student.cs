using System;
using System.Collections.Generic;
using System.Linq;

namespace Project_LINQ1
{
    public class Student : IEquatable<Student>
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int TotalMarks { get; set; }
        public List<Subject> EachMarks { get; set; }

        public bool Equals(Student other)
        {
            var tempBool1 = new bool();
            var tempBool2 = new bool();
            var tempBool3 = new bool();
            if (object.ReferenceEquals(other, this))
                return true;
            else if (object.ReferenceEquals(other, null))
                return false;
            if(other.EachMarks != null)
            {
                tempBool1 = this.EachMarks.Except(other.EachMarks).Count() == 0;
                tempBool2 = other.EachMarks.Except(this.EachMarks).Count() == 0;
                tempBool3 = this.EachMarks.SequenceEqual(other.EachMarks);
            }
            else
            {
                tempBool1 = true;
                tempBool2 = true;
                tempBool3 = true;
            }
            return this.StudentId == other.StudentId && this.StudentName == other.StudentName && this.TotalMarks == other.TotalMarks && tempBool3/*tempBool1 && tempBool2*/;
        }
        public override int GetHashCode()
        {
            if (this == null)
                return 0;
            else if (this.EachMarks != null)
                return this.StudentId.GetHashCode() ^ this.StudentName.GetHashCode() ^ this.TotalMarks.GetHashCode() ^ this.EachMarks.GetHashCode();
            else
                return this.StudentId.GetHashCode() ^ this.StudentName.GetHashCode() ^ this.TotalMarks.GetHashCode();
        }
    }
    public class StudentCompare : IEqualityComparer<Student>
    {
        public bool Equals(Student x, Student y)
        {
            var tempBool1 = new bool();
            var tempBool2 = new bool();
            if (object.ReferenceEquals(x, y))
                return true;
            
            else if (object.ReferenceEquals(y, null))
                return false;
            else if (object.ReferenceEquals(x, null))
                return false;
            if(x.EachMarks != null && y.EachMarks != null)
            {
                tempBool1 = x.EachMarks.Except(y.EachMarks, new SubjectCompare()).Count() == 0;
                tempBool2 = y.EachMarks.Except(x.EachMarks, new SubjectCompare()).Count() == 0;
            }
            else
            {
                tempBool1 = true;
                tempBool2 = true;
            }
            return x.StudentId == y.StudentId && x.StudentName == y.StudentName && x.TotalMarks == y.TotalMarks && tempBool1 && tempBool2;
        }

        public int GetHashCode(Student obj)
        {
            if (object.ReferenceEquals(obj, null))
                return 0;
            else if (obj.EachMarks != null)
                return obj.StudentId.GetHashCode() ^ obj.StudentName.GetHashCode() ^ obj.TotalMarks.GetHashCode() ^ obj.EachMarks.GetHashCode();
            else
                return obj.StudentId.GetHashCode() ^ obj.StudentName.GetHashCode() ^ obj.TotalMarks.GetHashCode();
        }
    }
}