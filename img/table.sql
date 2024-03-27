DROP TABLE IF EXISTS myTable;
CREATE TABLE myTable (
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(255) default NULL,
    email varchar(255) default NULL,
    pass varchar(255),
    userid varchar(255),
    PRIMARY KEY (ID)
);
INSERT INTO myTable (name,email,pass,userid)
VALUES
  ("Solomon Meadows","est.arcu.ac@aol.couk","9dc673463c0e68b0d7eb86708309f232","C711A1C5-43B1-1AAA-610A-C9DA67A5557D"),
  ("Anjolie Butler","libero@google.ca","d1833805515fc34b46c2b9de553f599d","B3D27959-8514-A236-62B8-6C4587CD9362"),
  ("Lawson Smith","sit.amet@aol.org","ab92d9fae5ee7975c7735376ec60851b","33DF7057-6E73-3BCB-B63B-C9ED11ED3D3A"),
  ("Dieter Calhoun","dictum.augue.malesuada@hotmail.net","7cf2db5ec261a0fa27a502d3196a6f60","D4FD22E3-C854-94AD-1F62-E56E7527162E"),
  ("Omar Gallegos","ac.turpis.egestas@aol.org","ffb523ff233449e21cd37a761c6d62c7","8CAC4589-D81A-7371-83A2-41A6F82C844B"),
  ("Imelda Howell","torquent.per@aol.ca","ed1a6c2f56aee202a9519272f6bc85e1","2FE6B8A8-846E-24D6-7774-34ACC1DC544B"),
  ("Micah Nishihira","mauris.ut.quam@icloud.com","a029c3d3081ad4a884c310f3e46d6a09","E94B3D19-2877-BB34-2F28-6BAD2B4C3235"),
  ("Jerome Alexander","est.vitae.sodales@icloud.edu","2dccd1ab3e03990aea77359831c85ca2","4E152103-05A4-1F57-62C2-088C6C8DEC37"),
  ("Galvin Joyner","a.malesuada.id@yahoo.net","b4e1c6620073acda217d807627a78dae","B86DA86B-96DB-2333-3F40-6D3693DC752C"),
  ("Fuller Mann","in@outlook.edu","beafcd941add72495187c567f46ba59b","314C6E22-9964-5D71-EA1C-661476FEB294");
INSERT INTO myTable (name,email,pass,userid)
VALUES
  ("Samuel Barrett","mollis.lectus@icloud.ca","16fd0a041526e820b786d2692299ae6b","B44D44F5-593D-82B9-8B7D-A20FF35BD516"),
  ("Anna Gray","fermentum.vel@outlook.org","871235bcf942b6904980603b4cf5f189","6E4A6B6D-0E4B-8384-95A4-A2D6EFA36036"),
  ("Blythe Villarreal","adipiscing.elit.etiam@google.com","e483f60f548fdcd2a53eebb8d1b4c06e","3164B496-6A62-A3E1-288C-D7B3EA85F565"),
  ("Byron Carver","donec@hotmail.com","be5025a943f87944ae2446bad0982f28","CB7CDEA4-9973-A3CE-315C-F8B38C3B2DAE"),
  ("Merrill Munoz","tellus.non@protonmail.com","657f8b8da628ef83cf69101b6817150a","23512B51-58DC-774B-3191-ECCA4C8B6B41"),
  ("Vaughan Strickland","ridiculus@yahoo.couk","005d05de29487ec44cd07bd9d757d4e1","22CE8E81-871B-AF99-902D-B5C11DFC6EE4"),
  ("Rose Leonard","suspendisse.commodo@hotmail.net","8eea944d79b9bc4b09249a2888605515","24320164-7F9A-1343-4719-A456EF1A47EB"),
  ("Matthew Ruder","tincidunt@aol.org","12a032ce9179c32a6c7ab397b9d871fa","BB9195BD-278E-ECF9-5659-485775EDED31"),
  ("Amy Navarro","a@protonmail.com","c2f79d9865943608f4aa34e0949315e4","D33660DD-22B5-58E7-C28E-87BA74219ACE"),
  ("Noel Wilkerson","interdum.curabitur@icloud.couk","c7e08427d790af6a0b15361d15f6c3cf","A2D6B584-A402-34B2-9411-9B75273B9134");