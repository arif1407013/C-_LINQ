using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Project_LINQ1
{
    class Program
    {
        static void Main(string[] args)
        {
            var list1 = new List<Student>();
            list1.Add(new Student
            {
                StudentId = 01,
                StudentName = "Abc",
                TotalMarks = 80+100+70,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "math", SubjectMark = 80 }, 
                              new Subject { SubjectName = "biology", SubjectMark = 100 }, 
                              new Subject { SubjectName = "english", SubjectMark = 70 } 
                }
            });
            list1.Add(new Student
            {
                StudentId = 02,
                StudentName = "Bcd",
                TotalMarks = 95+90+95,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "english", SubjectMark = 95 },
                              new Subject { SubjectName = "physics", SubjectMark = 90 },
                              new Subject { SubjectName = "biology", SubjectMark = 95 }
                }
            });
            list1.Add(new Student
            {
                StudentId = 03,
                StudentName = "Cde",
                TotalMarks = 300,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "math", SubjectMark = 100 },
                              new Subject { SubjectName = "physics", SubjectMark = 100 },
                              new Subject { SubjectName = "chemistry", SubjectMark = 100 }
                }
            });
            list1.Add(new Student
            {
                StudentId = 04,
                StudentName = "Def",
                TotalMarks = 245,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "math", SubjectMark = 85 },
                              new Subject { SubjectName = "biology", SubjectMark = 80 },
                              new Subject { SubjectName = "chemistry", SubjectMark = 80 }
                }
            });
            list1.Add(new Student
            {
                StudentId = 05,
                StudentName = "Efg",
                TotalMarks = 75+100+70,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "english", SubjectMark = 75 },
                              new Subject { SubjectName = "physics", SubjectMark = 70 },
                              new Subject { SubjectName = "chemistry", SubjectMark = 100 }
                }
            });
            list1.Add(new Student
            {
                StudentId = 06,
                StudentName = "Fgh",
                TotalMarks = 80+60+50,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "chemistry", SubjectMark = 80 },
                              new Subject { SubjectName = "physics", SubjectMark = 60 },
                              new Subject { SubjectName = "biology", SubjectMark = 50 }
                }
            });
            list1.Add(new Student
            {
                StudentId = 07,
                StudentName = "Ghi",
                TotalMarks = 300,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "english", SubjectMark = 100 },
                              new Subject { SubjectName = "biology", SubjectMark = 100 },
                              new Subject { SubjectName = "chemistry", SubjectMark = 100 }
                }
            });
            var list2 = new List<Subject>();
            list2.Add(new Subject { SubjectName = "math", SubjectMark = 100 });
            list2.Add(new Subject { SubjectName = "physics", SubjectMark = 100 });
            list2.Add(new Subject { SubjectName = "chemistry", SubjectMark = 100 });
            list2.Add(new Subject { SubjectName = "biology", SubjectMark = 100 });
            list2.Add(new Subject { SubjectName = "english", SubjectMark = 100 });
            list2.Add(new Subject { SubjectName = "arts", SubjectMark = 100 });
            foreach (var lis1 in list1)
            {
                Console.WriteLine($"{lis1.StudentId}------{lis1.StudentName}------{lis1.TotalMarks}");
                foreach(var em in lis1.EachMarks)
                {
                    Console.WriteLine($"{em.SubjectName}-----------{em.SubjectMark}");
                }
                Console.WriteLine("-------------------------------------------------------------------");
            }
            var output1 = (from li1 in list1
                           from li11 in li1.EachMarks
                           where li11.SubjectName == "math" && li11.SubjectMark > 80
                           select li1).ToList();
            var output2 = (from li1 in list1
                           select li1).Contains(new Student
                           {
                               StudentId = 04,
                               StudentName = "Def",
                               TotalMarks = 240,
                               EachMarks = new List<Subject>{ new Subject { SubjectName = "math", SubjectMark = 85 },
                               new Subject { SubjectName = "biology", SubjectMark = 80 },
                               new Subject { SubjectName = "chemistry", SubjectMark = 80 }
                           }
                           }, new StudentCompare());
            Console.WriteLine(output2);
            var list3 = new List<Teacher>();
            list3.Add(new Teacher { TeacherId = 01, TeacherName = "zy", TeacherSubject = "math" });
            list3.Add(new Teacher { TeacherId = 02, TeacherName = "yx", TeacherSubject = "chemistry" });
            list3.Add(new Teacher { TeacherId = 03, TeacherName = "xw", TeacherSubject = "physics" });
            list3.Add(new Teacher { TeacherId = 04, TeacherName = "wv", TeacherSubject = "biology" });
            list3.Add(new Teacher { TeacherId = 05, TeacherName = "vu", TeacherSubject = "english" });
            list3.Add(new Teacher { TeacherId = 06, TeacherName = "ut", TeacherSubject = "sports" });
            var list5 = new List<Teacher>();
            var list4 = new List<Student>();
            list5.Add(new Teacher { TeacherId = 01, TeacherName = "zy", TeacherSubject = "math" });
            list5.Add(new Teacher { TeacherId = 02, TeacherName = "yx", TeacherSubject = "chemistry" });
            list4.Add(new Student
            {
                StudentId = 07,
                StudentName = "Ghi",
                TotalMarks = 300,
                EachMarks = new List<Subject>{ new Subject { SubjectName = "english", SubjectMark = 100 },
                              new Subject { SubjectName = "biology", SubjectMark = 100 },
                              new Subject { SubjectName = "chemistry", SubjectMark = 100 }
                }
            });
            var output3 = list3.Intersect(list5).ToList();
            var output5 = list1.Except(list4).ToList();
            var output4 = (from lis1 in list1
                           select new
                           {
                               StudentName = lis1.StudentName,
                               StudentId = lis1.StudentId,
                               TotalMarks = lis1.TotalMarks,
                               //EachMarks = new List<Subject>() //lis1.EachMarks
                           }).Intersect(from lis4 in list4
                                        select new
                                        {
                                            StudentName = lis4.StudentName,
                                            StudentId = lis4.StudentId,
                                            TotalMarks = lis4.TotalMarks,
                                            //EachMarks = new List<Subject>() //lis4.EachMarks
                                        }).ToList();
            /*foreach(var lis2 in list2)
            {
                Console.WriteLine(lis2.SubjectName+"<<<<<>>>>>"+lis2.SubjectMark);
            }
            Console.WriteLine("-----------------------------------------------");
            foreach(var lis3 in list3)
            {
                Console.WriteLine(lis3.TeacherId+"<<<>>>"+lis3.TeacherName+"<<<>>>"+lis3.TeacherSubject);
            }*/
            var output6 = (from lis3 in list3
                           join lis2 in list2 
                           on lis3.TeacherSubject equals lis2.SubjectName
                           select new
                           {
                               teacher = lis3.TeacherName,
                               number = lis2.SubjectMark
                           }).ToList();
            foreach (var out6 in output6)
            {
                Console.WriteLine(out6.teacher + "<<<>>>" + out6.number);
            }
            var list6 = new List<Relation>();
            list6.Add(new Relation { Id = 1, studentCount = 3 });
            list6.Add(new Relation { Id = 2, studentCount = 5 });
            list6.Add(new Relation { Id = 3, studentCount = 4 });
            list6.Add(new Relation { Id = 4, studentCount = 5 });
            list6.Add(new Relation { Id = 5, studentCount = 4 });
            list6.Add(new Relation { Id = 7, studentCount = 0 });

            var output7 = (from lis6 in list6
                           join lis3 in list3
                           on lis6.Id equals lis3.TeacherId
                           join lis2 in list2
                           on lis3.TeacherSubject equals lis2.SubjectName
                           select new
                           {
                               id = lis3.TeacherId,
                               teacher = lis3.TeacherName,
                               subject = lis2.SubjectName,
                               studentCount = lis6.studentCount,
                               mark = lis2.SubjectMark
                           }).ToList();
            var output8 = (from lis1 in list1
                           from li1 in lis1.EachMarks
                           group li1 by li1.SubjectName into subject
                           select new
                           {
                               name = subject.Key,
                               count = subject.Count()
                           }).ToList();
            var output9 = (from lis2 in list2
                           join lis3 in list3
                           on lis2.SubjectName equals lis3.TeacherSubject
                           into tempList
                           from temp in tempList.DefaultIfEmpty()
                           select new
                           {
                               subject = lis2.SubjectName,
                               teacher = temp != null ? temp.TeacherName : "none"
                           }).ToList();
            Console.WriteLine("---------------------------------------------------");
            foreach (var out9 in output9)
            {
                Console.WriteLine(out9.subject + "=-=-=-=-=-=" + out9.teacher);
            }
            var output10 = (from lis3 in list3
                            join lis6 in list6
                            on lis3.TeacherId equals lis6.Id
                            into listTemp
                            from lisT in listTemp
                            where lisT.studentCount == 4
                            select new
                            {
                                teacher = lis3.TeacherName,
                                count = lisT.studentCount
                            }).SingleOrDefault(x=>x.teacher=="wv");
            var list7 = new List<Subject> {new Subject{ SubjectName="a",SubjectMark=0},
                                           new Subject{SubjectName="b",SubjectMark=0},
                                           new Subject{ SubjectName="a",SubjectMark=50},
                                           new Subject{SubjectName="b",SubjectMark=50},
                                           new Subject{ SubjectName="a",SubjectMark=100},
                                           new Subject{SubjectName="b",SubjectMark=100},
                                           new Subject{ SubjectName="a",SubjectMark=75},
                                           new Subject{SubjectName="b",SubjectMark=75}
            };
            var list8 = new List<Subject> {new Subject{ SubjectName="c",SubjectMark=200},
                                           new Subject{SubjectName="d",SubjectMark=200}
            };
            var output11 = list7[0].ToString();
            var output12 = list7.Zip(list6,(first, second)=>first.SubjectName+"- - - - -"+second.studentCount);
            Console.ReadLine();
        }
    }
}