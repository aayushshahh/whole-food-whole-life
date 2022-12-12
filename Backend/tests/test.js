const express = require("express");
const chai = require("chai");
const request = require("supertest");
const res=require("supertest")

const app = express();



describe("POST users into db",() =>{
    it("should be able to add user successfully", () => {
      request(app).post("/apiv1/saveUser").send("@jackggh").expect(200);
    });
  });

describe("Search Food", () => {
    it("should return ok connection",() => {
      request(app).get("/apiv1/searchFood").send().expect(200);
    });
  });


  describe("track meal", () => {
    it("Update Successfull", () => {
      request(app)
        .post("/apiv1/trackMeal")
        .send({})
        .expect("Update Successfull")
        // .then((res) => {
        //   expect(res.headers.location).to.be.eql("/apiv1/trackMeal");
        // });
    });
    it("Update Unsuccessful", () => {
      request(app)
        .post("/apiv1/trackMeal")
        .send({})
        .expect("Update Unsuccessful")
        // .then((res) => {
        //   expect(res.headers.location).to.be.eql("/apiv1/trackMeal");
        });
    // });
    it("New Record Added Successfully", () => {
        request(app)
          .post("/apiv1/trackMeal")
          .send({})
          .expect("New Record Added Successfully")
        //   .then((res) => {
        //     expect(res.headers.location).to.be.eql("/apiv1/trackMeal");
          });
    //   });
      
      it("Record not added, failure", () => {
          request(app)
          .post("/apiv1/trackMeal")
          .send({})
          .expect("Record not added, failure")
        //   .then((res) => {
        //     expect(res.headers.location).to.be.eql("/apiv1/trackMeal");
          });
          
        

        //   }).catch(res =>
        //     expect(res.headers.location).to.be.eql("/apiv1/trackMeal")
        //   );
     
  });