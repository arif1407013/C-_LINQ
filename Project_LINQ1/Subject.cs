using System;
using System.Collections.Generic;

namespace Project_LINQ1
{
    public class Subject : IEquatable<Subject>
    {
        public string SubjectName { get; set; }
        public int SubjectMark { get; set; }

        public bool Equals(Subject other)
        {
            if (object.ReferenceEquals(other, this))
                return true;
            else if (object.ReferenceEquals(other, null))
                return false;
            return this.SubjectName == other.SubjectName && this.SubjectMark == other.SubjectMark;
        }
        public override int GetHashCode()
        {
            if (this == null)
                return 0;
            return this.SubjectName.GetHashCode() ^ this.SubjectMark.GetHashCode();
        }
        public override string ToString()
        {
            return this.SubjectName+"  "+this.SubjectMark.ToString();
        }
    }
    public class SubjectCompare : IEqualityComparer<Subject>
    {
        public bool Equals(Subject x, Subject y)
        {
            if (object.ReferenceEquals(x, y))
                return true;
            else if (object.ReferenceEquals(y, null))
                return false;
            else if (object.ReferenceEquals(x, null))
                return false;
            return x.SubjectName == y.SubjectName && x.SubjectMark == y.SubjectMark;
        }

        public int GetHashCode(Subject obj)
        {
            if (object.ReferenceEquals(obj,null))
                return 0;
            return obj.SubjectName.GetHashCode() ^ obj.SubjectMark.GetHashCode();
        }
    }
}