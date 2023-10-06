create schema scholarship;
use scholarship;
create table scholarship. Admins(
   Admin_id int primary key auto_increment,
   Admin_name varchar(50),
   Admin_password varchar(60),
   address varchar(100),
   phone_number bigint,
   email_id varchar(100)
   );

create table scholarship. College(
	College_id int primary key auto_increment,
    College_name varchar(100),
    address varchar(100),
    phone_number bigint
    );
    
create table Scholarship.foundation(
    foundation_id int primary key auto_increment,
    foundation_name varchar(60),
    address varchar(100),
    phone_number bigint,
	allocated_seats int,
    available_seats int,
    college_id int,
    foreign key(college_id) references College(college_id)
    );
    
create table Scholarship. School(
    School_id int primary key auto_increment,
    School_name varchar(100),
    address varchar(100),
    board varchar(50),
    phone_number bigint
    );
    
    
CREATE TABLE scholarship.Users(
    User_Id INT PRIMARY KEY auto_increment,
    Full_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    phone_Number BIGINT NOT NULL,
    Address VARCHAR(150) NOT NULL,
    Gender VARCHAR(20) NULL,
    Aadhar_Number BIGINT NOT NULL,
    community VARCHAR(50) NOT NULL,
    Date_Of_Birth DATE NOT NULL,
    Age INT NULL,
    Father_name VARCHAR(50) NOT NULL,
    Father_Occupation VARCHAR(60) NOT NULL,
    Father_monthly_salary BIGINT UNSIGNED NULL,
    Mother_name VARCHAR(50) NOT NULL,
    Mother_occupation VARCHAR(50) NOT NULL,
    Mother_Monthly_Salary BIGINT UNSIGNED NULL,
    State varchar(30) NOT NULL,
    District VARCHAR(30) NOT NULL,
    10th_mark INT NOT NULL,
    11th_mark INT NOT NULL,
    12th_mark INT NOT NULL,
    register_Number_12th bigint,
    Own_House_OR_Rent_House VARCHAR(30) NOT NULL,
    If_No_Rent_paid_per_month INT NOT NULL,
    Course_Type VARCHAR(50) NOT NULL,
    Reference_name VARCHAR(50) NOT NULL,
    School_Type VARCHAR(50) NOT NULL,
	Year_Of_passing_10th INT NOT NULL,
    Year_Of_Passing_11th INT NOT NULL,
    Year_Of_Passing_12th INT NOT NULL,
    10th_Mark_Sheet mediumblob NOT NULL,
    11th_Mark_Sheet mediumblob NOT NULL,
    12th_Mark_Sheet mediumblob  NOT NULL,
    Aadhar_Card mediumblob NOT NULL,
    Passport_photo mediumblob NOT NULL,
    Community_Certificate mediumblob NOT NULL,
    Income_Certificate mediumblob NOT NULL,
    School_id INT  NOT NULL,
    foreign key (School_id) references School(School_id)
);
    
create table scholarship.application_status(
    application_id int primary key auto_increment,
    status_ varchar(30),
    User_Id int,
    college_id int,
    admin_id int,
    foundation_id int,
    foreign key(User_Id) references Users(User_Id),
    foreign key(college_id) references College(college_id),
    foreign key(admin_id) references Admins(admin_id),
    foreign key(foundation_id) references foundation(foundation_id)
    );
    
    
create table scholarship.user_login(
    User_Id int primary key auto_increment,
    email_id varchar(100),
    user_password varchar(50),
    role_selection varchar(30),
    foreign key(User_Id) references Users(User_Id)
    );
    
select a.application_id, b.Full_Name from scholarship.users as b
  join scholarship.application_status as a
  on b.user_id = a.User_Id
  order by application_id;
