using System;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Project_LINQ1
{
    public class Teacher : IEquatable<Teacher>
    {
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
        public string TeacherSubject { get; set; }
        public bool Equals(Teacher other)
        {
            if (object.ReferenceEquals(other, null))
                return false;
            else if (object.ReferenceEquals(this, other))
                return true;
            return this.TeacherId == other.TeacherId && this.TeacherName == other.TeacherName && this.TeacherSubject == other.TeacherSubject;
        }
        public override int GetHashCode()
        {
            return this.TeacherId.GetHashCode() ^ this.TeacherName.GetHashCode() ^ this.TeacherSubject.GetHashCode();
        }
    }
    public class TeacherCompare : IEqualityComparer<Teacher>
    {
        public bool Equals(Teacher x, Teacher y)
        {
            if (object.ReferenceEquals(x, null))
                return false;
            if (object.ReferenceEquals(y, null))
                return false;
            else if (object.ReferenceEquals(x, y))
                return true;
            return x.TeacherId == y.TeacherId && x.TeacherName == y.TeacherName && x.TeacherSubject == y.TeacherSubject;
        }

        public int GetHashCode(Teacher obj)
        {
            if (object.ReferenceEquals(obj, null))
                return 0;
            return obj.TeacherId.GetHashCode() ^ obj.TeacherName.GetHashCode() ^ obj.TeacherSubject.GetHashCode();
        }
    }
}
