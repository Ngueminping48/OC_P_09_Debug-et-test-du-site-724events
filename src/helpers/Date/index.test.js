import { getMonth } from  "./index";

/**
 * 
 * 
 */

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // to implement
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
        });
    });
})

describe("Date helper", () => { 
    describe("When getMonth is called", () => {
  
      it("the function returns janvier for 2022-01-01 as date", () => {
        const result = getMonth(new Date("2022-01-01"));
        expect(result).toBe("janvier");  // to implement Vous appelez la fonction getMonth en lui passant la date "2022-01-01".
                                        // Le résultat doit être "janvier", que vous vérifiez avec l'assertion expect(result).toBe("janvier").
      });
  
      it("the function returns juillet for 2022-07-08 as date", () => {
        const result = getMonth(new Date("2022-07-08"));
        expect(result).toBe("juillet");
      });
  
    });
  });
  

