import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // categories array
        categories:[{
            id: 1,
            name: 'Men wear',
        },
        {
            id: 2,
            name: 'Foot wear',
        },
        {
            id: 3,
            name: 'Perfumes',
        }],

        // sub categories array
        sub_categories:[{
            id: 1,
            name: 'Shirts',
            cat_id: 1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvTTTKSxk7G-SwKOYUVUoy7fRdERRPaRTEg&usqp=CAU'
        },{
            id: 2,
            name: 'T-Shirts',
            cat_id: 1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRQM-wxK9XWLx8NhhmSKlbEf2g5HsmuTx5w&usqp=CAU'
        },{
            id: 3,
            name: 'Kurta',
            cat_id: 1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziUnAo__JaMgSeaPp5t3W1IO3gfhQBPYrcg&usqp=CAU',
        },{
            id: 4,
            name: 'Formal-Shoes',
            cat_id: 2,
            src:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgREhEYERESGBIYEhEYERkYGBIZGRgZGRocGhweIy4lHB4rHxgYJzgmKy8xNTU1GiQ7QDs1Py40NTEBDAwMEA8QGhISGjEhISE0NDExMTQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDE0MTQ0NDQ0MTExND80MTQ0PzE3ND80ND80NP/AABEIANMA7wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQIEAwUFBgQFAwUAAAABAgADEQQSITEFQVEGEyJhcTJCgZGhB1KxwdHwFCNikjM0cnOCs+HxFSRDU9L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEBAQACAwEAAwAAAAAAAAABAhEhMRJBUQMiMmH/2gAMAwEAAhEDEQA/APTQI4CII4TQUR4EQRwgAiiAi2gAjhEjoAIsBFgAiwiwEiwhAIQhAIRYQEhCEAtCEIBEiwgJEjokBsQx0QwGGMaSGMaQQCPEaI8ShRHCIIsBRFiCOEAEcIgjhAIsIsgIQhAIRYQCEWVOIcSoYdM9eqlJOrNa/p1jotRZzWH7ecLqPkXGJm28V1HzItOjp1FcBkYMp2YEEH4iOhYRYShIRYQGwiwgJCEICRDHRDAjMYwkhkbSCIR4jRHCUOEURBFEBRHCII4QFEWII4SAhCLASLCLAIQjoFbHYtKNNqrnKiC5P4AeZOk+d/tF45VxGIIckDcJfRV5AfnPV+33Eb/yQfClmbzc7D4DX4zxbthT8aVOTKQT5rb8jMW+eOkzzNrnFM6zsn21xXD3Wzs9G4z0ibgrztfYzkRHhpazK+sOAcdoY6iK1B8wNsy+8h6MOU1Z8sdle0tbh9cVqR00FSmfZdeh+vpPo/sz2gocQoLXotvo6e8jcwf1llSxsRsdCVk2IY+ZuP4jkcUaS97iGsQl7LTW/t1G91d/M7AGBfiRYShIhiwMimGRtJTI2gRCOEQRwlAI4RBFEBwjhGiOEBRFgISBYQiwCEdCARlSoFUsdlBJ+EfMLtfjO6wpsdXIUfnISdrzXi2NNV3cn2mZvn/4nMcXwhrUWQC7p415kkXuPUj8JqVSQZXqEg5hOPfPXr5Lnjzu0W06viPCUqkup7tz7VhdWPW3I+kzP/QmvrUW3lmJPzAnT5Rw+FjFE6Dsn2mr8OrCrSbw7PTJOVx0I/OSYfgKbszNt0G+21/xm9wrgtFWDKi3DAZ2XMNwPeJHPpyMXUrU/np7V2a7SYfH0RVpOAdM9MkZkPQ9R5zaBnkjYFLfzKilbHRkQAfIA/IzJpcfbCMz4TEPlykd3mZ0BuLEBr2B5X19YlrOv5yfbtOKYmvisVUw2HrVUxC1MqFKjpSwtJAuapUVbByWuApOvwlrh9YYTErQp4tcaK7jvkKhq6sd3Z00KjTRhoNjMXsJhamOpOatUohqMcTkbLVxVRvEM7DVaaqQAFtcg/H0TBYCjQQJRprTUclUD5nn8ZpzWIhj42VCGIYsDAYZG0lMjMKiEcI0RwlCiOEaI8QFEcIgiiQLFgIQCLCOgEIQgE4n7R6vgppfmxI+Gn5ztp5F2/4rlx5Rz/KIRA33HUc/I3Mzr01j2w8QLi/SVWMvhL+hBsZlo+reRH4Cc9R6c051EiyyQtI2MxWzkXXa55SdMWEzMAzhQLkHKgseZJAbblfnKyORqNxtFQd46g081tlDgL66+u2sZTSzi0xOMAdqKUqVPNao7NqDvZRYttztMTiFOmgt3hzhS2axBIG3hGy22HTWdBi2qVMudwKaqGKKfDy9o87bn4CUu9w9NWsve16tyQFzvbYi/S3wneOGp10/2ScUWlWOFYkNVDNYtcfeUr8bi39U9inzXw/iRw1YYkoA1FylsoVlCkaXGh20n0bgsStWmlVDdaiK6+jAGWOepxPGmOjZWCQMWJAaZGZIZGYEQjhGiOEqnCOEaI4QHCOjRHCQEUQEBAWOjY6AQnKYbFY2rXxTUqiBMNWFNKFRbI6ikjk511U5mOtiNJg8Z+0l0Pc0qKDEA2a9UVkNt8mT2vjaTo9HqOFUsdlBJ+AnhXaSqlWs4cd5nLHuwbXF+Z90ee/SXuIfapXek1JqIpl1K95aza72UnTTnOFfiJJIa2puRdjf/U1tT66Ra3mNbC8W7tz3zIbm1MINgBovRQPWMfEItRxqAchubEC97XIPO30mZWZaikW+HTzEzv4l1bJcsCMnna+ny1meLLx0H8UL2+em0mzX1BuJi4DEplOdruSd+cvU6vMfEfrOV9u+fS4DEubgAAnkDtuCIxHv+XpJGX+nNa1/x+Owk55a72NnD4ZXpZW1722e+2UcvIWv85COLYaiO6wdDvHI1ygnN5sx1t6mXuD2JUH3R+UbjuMYOkGp01CuCwKU6e5Gh0A6ztm+HPU5XKYgVy7I6ZRkzFB41bWxBvz326T2T7LuOjF4Rqdsr4dsrLYiwI5X5Xv8547xCvUrMjLQYZmUZgTntudBsNOc6n7P+NvhcemHcHJiCyNceycpIbNzHhGh1ERy1Ht8IQm3I2IYsQwEMiaSGRtAhEeJGseJVOEeIwRwkDxHCMEcIDhAQEICiEJj9o+P0sDTD1PEznLTQEDO3O5OiqOZMDgO2nECjPTQvTpYh+8qI7rSLHKqZmAPeZPDoCFufK04Nahr5qdzTzf4TXsAlyDax3Om5O0t8Xxr4p2pMULs71HVj/mGJJHjU622A6AaWEdlpVaYpf4VUDRbaqR06iYt465z1RThFMuyVEy1EClmBNnA0zDpfS46kwxOHQbD005zXGZKYDkM6ggsOfT6TExTgkn4D98+vxnLWvt6c4knGfW0O/x6SjWxL2yk78wACfXS8s13lCoLy41ftj+mIYrFT6fSa2ExF5ligwFwL9R5Szg6+Xw6FeQI/ZmtZ7HP+erLxvp1Hw/O8uYYZtSLEb6/ED8JQwzAi3unkeR6GXKbEHXfSx3zXPMeWk5z8dv+tzhTAPY7GO41xShTqNSp0jVrLbNlUDcA6n47ythiw1sujhPbyXY2sBmte8tYvvCr3UKKRAqXq0/ASAQGs2m4M659JrzXKcQr13RvAqAA2HtNt15ROHYmpRVK1O5sFNh4rG2twdwfLWX8XRcZg2VSvteK9r7bCVMMpTw+Hw5RoT+YklrNzHvPY/i/8XhUdgVqBUzqdxmUMt/gfoZuTyXsdxk0agZj4CoSoL3zKCTf1FzPWQwIuDcHUHqJ0jzanKIGJAyskMiaSNIWMKiBjwZCDHgyiUGOBkYMcDIJAY4GRAxwMCQGLeMDRQYFTivFaOFTPVcLe4Rb+Ko1r5VA1JnhvaTizYkmpXYNiX0VGB/lBj7NJSNAPIZmO/SdX2y4w7YtzQdSmRKYfKS9MhmLhDewDErfmco8pxdPDh6yO98tMEqWB1ck5ifQBbTFrrnF9pOC4DDNhzQBLVQ12bLkdG5EA6jkP/Mm7ks/d16Z71BdayhlzgEa3G3K46gy9T4WMQ4qI+Sovs1FIuOViOY8jGYrvqdPLWZHcEgMhPiXkSCNDv8AKZ1fHXbGfPGbxHEb26Ha375zBrVJcxj3v5zKrNczh/s795UNQ3iU0uY5VvsLy1h0sdRO2ZXHeos0KK2uRMvH0Mj3X2W1XyPMTRxFWwletTNRGPKmAf8A9H5Tr9PP9p8DV26HebNF9uYNref/AHnN4RradCR8pr0KmnlvzJJ026fvznnvvj0y+JXU8MCnQ3APIOw/AzZqYWmF1XNcbFnPzu05jhdcBgDoZ1wIancTrmeE1XMYqjTvogH/ABEzqlMA7C3oJ0WJo25TJxNPWSxqXwm4a6qwNhpznp/Y3iWemcOxu9LWn/VTPs/2m6/ATyekSDN/hXEmoulZNWpnxL99D7a/LUeYE1muP9M98vXSYhMhw+IWoi1EOZHUMp6gi4jyZt5wxkTmOJkTtAhBjg0BRaOFBpQBo4NFFFoootIANFDRe5aZmP4qlIaA1W+6hAHxYkD8YI0y9tSbAbnpOQ7TdoQymjSBZTo73IDeQ6j8YuP4xUqAoEIH3cwAP4mc1j3c7eEgglco1A3G/prM2uuMz3WY6Zjqo5aa8tt5H3C/d5g+pHOX6pA/e8rlxynPy9E5xG1PLqRe5BvfUWtoDyGnK0zOIVSbnMSLiwJvpzuT+s0cRXFtdPOYWOqeczq8jWYzMTV13tKypfW3z2+UdUuxvy/fOWKNInUDTrGYzuyfZqUv3/2lpMGbFtgN9P3eWMOUTVl185BiOJXUqNp19ONpHo08pZjot+e80cBgwMLULDV0cW8yp2+c596pYgX00+k2v/VKaItMuABfNrzMsrFc8ujeTWYfEA/nNHDPylFFDp4faTbzUE2I+dvlJKFW46HmOk47nnr0fzvj4tmg1tPly1JuTfr+M6bhXEbLZjcahXsRztr0nIUKvWaFGqRqp1ta+hIB6X0+cudLcupxTk6zPeneGGxBYEKCNsqXO9tbmxtr0kro3MaW8Q1Gvl5b/Sboz0QX1O5a1zyHT6SzhntYjb8Y5Utv9L2Op5XtzjbA2YKfI+um0Jx3HYfiOXNhGOgu9G590nxKPQzsC08ewWJem61FbxISQdiOdvwnrHCsQMRSWqumb2l+6w0I/fWbjzbzyp2aQVGlk4c9ZE+FPWVhZAjwIgjhKgAnP8d7U0sMe7Wz1PXwr1v1PlGduONHB4XMps9Q5FN9QLXJHnsJ4viOKZ2uzc77zGtcdcY+Xmu2xnbCvVzAtlI9ldLE20Ngdrg7zPfjTsLEXBKtqL6H9D9Jm4DGYJU/mVGDclUSnj+J0D/hliOVxM3TvMZbL8VIOu1tCASb7ddpG3EcwBO/Q8pyxxbHaNOIbzmLqtzMjer4vex1PW+8o1uIkE2PSwt85mvUYyF6ltL6yXVXkWcRj2bTMecpvWJkZJJ8oqLrHelifC0Cxubn1M0HQKN7D09f1iYKlfbYbmZmOxLVGKU9EXQv18hOmY8+9RBj8aPZEz+8ZttJZqUET2m1+piUWRjlF1vses1yOfbUVOgTux+Ev4bCJceG56nWQ5CDboZao1QNzHUsXMTwxwvf0hcpq6gbAe8BzHUSiUFTx0/DUHtJfRvMTsuyGIY10yoSM63NtLX1m123+z25bF8OXK3tVMIotc82pdD/AE/LpJct5080oVr6bEbjpNCjVlFlFTRh3dVdL2tr0YHY36xi1WRstQZTybkZzueenfO++K6LCYuxvebC4vON5yaVLS3QxJEd403nqWudlXc5SSdjoBvpISysFuLqxBF1IsetjqNvrH8PxKMwzMVJ3II123B0JsLXOwvNHHcOUfzFuyAA5iQczFiFQXOhufLcazcnfTNvPbMNXU2Nj4fP1t8LTtvs/wCL/wAxqDHR/ZJFgWGunqL/ACnnuKXuy2bZdCbWu27HW/l1kvCuJGlVSop9llYEE62N/wA5qXy56z2PfjGkRKNUOiuvsuqsPQi8cZt5jRFEaI68Dz/7Usdhmod3fvMTSYMtIZhcHQgsBYGxvY9J4q7VCdMPp0uT+c9h7Z9i8XisS9ekUZHt4C5VhYAcxblOOrdg+IIdaFx1DqfwM511z69uQ7msdf4ZvgDDvXX2qDj4GdNX7N1k0dCrDcG8qtwlxyW/m1pLZ+Okl/WMuOA3pP8A2yT+MQ7o4/4mawwDD7n94/WMfBN91f7x+sz2L/l+slsVT/rH/Exn8RS/q/sM2P4F/uj+8frGtgG6D4uP1jsO39ZX8TTH3v7THJi6fu03b4ATRXhz393++WqPC3PMfX9JZz8Zur+s6pWxDoadOl3StozFgWI6eUsYPhrhQqrcjoNp0vC+A1GIHXou07zh3Z9EUeHW2s65jlqvKqfY56huUsTzuby6n2cMw/xCnwvPYKXDlHKWFwo6S8jHa8lo/Zv/APZWYjoFtNPDdh8NT1yFyObMTPSDhpC+EjkO2uYwHDkpuoVQoBGgFp1xlFMGc4sOYmi6GByXansbh8beov8AJxVtKqjR/wDcX3vXeeW8V4NWwr9ziUte+Vt0qeaNz9PpPeGWVcbhadVDTq01dG3VhcevkfOZsbmue3z02GenrTOZeaHcehj8Ni0fS+Rvumeh8c7Cul3whNRd+5YjOv8Apb3vQ6+s4XGYAElaiFKi76FXU+YmbmOs3Z6SpVKzVwPGsgtcj4znBQrp/hnvkFtPeHwjU4jTOjgofMSSWem5uX228diEbVTpr4b6bk7ciSd5mGtbUnbz5x1N6Z1Dr85aw9fDoc75XZQSqDXMR16COW1bqSPe+yzscFhy/tGlTv8ALT6WmoZldmMQ1TBUKj+01NC3ra01J1eSmXjS0faBSEVK1W05/ivEW1VD6t08h5zpMRRBFuszKnB0P7+clWOCxtRjeY1eg5np7dn6ZgvZyn0mPjW/lHk54cx5fSKvBnPu/SevU+AUh7stU+F012QfKX4p8nkVHs7Ub3D8pp4bsjUb3PpPVEwqjZQPhJFpiX4xOuBwnYo+9YTcwnZakm4zfCdKEEW0vE6o4fh9On7KAfCWBTk1otpURBIuWSWhaBHlhkktoWgRomslamIKNZLJVVnwwMgfCdJoRLR0Y74U9JkcX4BRxItWphmHs1Bo6+jb/DadcRGMog7x43xXsHWQl8O4qryU+Bx6HY/ScpxHAVKZK16TodjnpkX/AOXOfRbU0+7IXwyEWKgjodR8pONfL9j5mbh9NjcKPQbTZ7P9mu+qrTQaki+VbkDqfL1nttfs1g6hu+GRj/oA/CW8Lw2lSGWnTVB0VbRwuomwdBadNaaCyU1VVHQAWEsxwWFpphW4dV72jTq2y94iPlvfLmUNa+l7X3tLfd+cpdn/APJ4f/Yof9NZozKoWo35/SJ3Hn9JPCOiDuPP6Re58/pJoR0Rd15/SHd+f0ksQwGZPOGTznNYvEYpqgCghqVWoVcUWKZe4r5QbkFjcKDyuwsTeMxPE8U6qFR6bBg1QihUOVe9oWAPPwNUuB907QOoyecMnnOYp43Gq6oAHDVq4dnp1FsoqgIq5UbQo1wTYaWvoZK+NxeVQfaqpXIC0GDU2CuUzXNgNBre5LDSxvA6PL5wyzmG4pi1XwKahCiwOHcFh3eY1Ceofw5Nzbzk+CxdYYliwZsOyqe+7pxmZVPhyEXUWBN9bkW0uLh0GXzhl85z+J4liAWFstqjqf8A21R+7RQ5RtPbzFU22zSFeJY66k0wAblk7lyVyvQUrmvuRVqEG3/x89YHTZfOGWVq7OFqFjkQL4HQFnGhzHLlOo0ta95zNKrWOqnEBTZsMh7wlXLrdKpYeLw2JzXAzPY+EGB2AWOnG1ExRpstNndg4Gc1MQneO6sARmzFFRsrECyEHytLLFmet4sRU7tbFL1qfe1cy2NMrYIguF8J1uSb5bkOpjbec45zi6FQhGqVWpoVAbvGV7UQc5vdSveX6vcWvbSXcHTqVO5VjWDo7F6veVkWolNgcxUkC7sQMrDYNbQCB0eXziZPOPEWBHk84d3JIQIu784Cn5/SSwjoblhljoQM7s//AJPD/wCxQ/6azRhCAQhCAQhCARDCEAhCEAhCEAiQhADFhCARIQgLCEIBCEICwhCAQhCAQhCAQhCB/9k='
        },{
            id: 5,
            
            name: 'Slippers',
            cat_id: 2,
            src:'https://p.globalsources.com/IMAGES/PDT/BIG/620/B1177162620.jpg'
        },{
            id: 6,
            name: 'Sport-Shoes',
            cat_id: 2,
            src:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },{
            id: 7,
            name: 'Arabic',
            cat_id: 3,
        },{
            id: 8,
            name: 'English',
            cat_id: 3,
        }],

        // products array
        products:[{
            id:1,
            name: 'Casual-Shirt',
            src:'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/4/Seller/18144967/Images/18144967_0_casual-shirt-for-men.jpg',
            sub_cat_id: 1,
        },{
            id:2,
            name: 'Formal-Shirt',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzJKqDRCJOhSZ7UqU5nMk3FwNUklkhlTLFQ&usqp=CAU',
            sub_cat_id: 1,
        },{
            id:3,
            name: 'Black',
            src:'data:image/jpeg;base64,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',
            sub_cat_id: 1,
        },{
            id:4,
            name: 'Casual t-Shirt',
            src:'data:image/jpeg;base64,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',
            sub_cat_id: 2,
        },{
            id:5,
            name: 'Formal-Shirt',
            src:'data:image/jpeg;base64,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',
            sub_cat_id: 2,
        },{
            id:6,
            name: 'Black t-Shirt',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWgpNkY2abueY6pRSW0kuqpJemzk37125zg&usqp=CAU',
            sub_cat_id: 2,
        },{
            id:7,
            name: 'Casual-Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:8,
            name: 'Formal-Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:9,
            name: 'Black-Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:10,
            name: 'Casual-Shoes',
            src:'',
            sub_cat_id: 4,
        },{
            id:11,
            name: 'Formal-Shoes',
            src:'',
            sub_cat_id: 4,
        },{
            id:12,
            name: 'Black-Shoes',
            src:'',
            sub_cat_id: 4,
        },
        {
            id:13,
            name: 'Casual-Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:14,
            name: 'Formal-Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:15,
            name: 'Black-Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:16,
            name: 'Casual-Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:17,
            name: 'Formal-Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:18,
            name: 'Black-Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:19,
            name: 'RIIFFS',
            src:'',
            sub_cat_id: 7,
        },{
            id:20,
            name: 'ANFAR',
            src:'',
            sub_cat_id: 7,
        },{
            id:21,
            name: 'SWISS-ARABIAN',
            src:'',
            sub_cat_id: 7,
        },{
            id:22,
            name: 'UDV',
            src:'',
            sub_cat_id: 8,
        },{
            id:23,
            name: 'Royal-Blue',
            src:'',
            sub_cat_id: 8,
        },{
            id:24,
            name: 'Active-Man',
            src:'',
            sub_cat_id: 8,
        }],

        cart:[{}],
    },
    getters:{
    getCattegory : state => id => state.sub_categories.filter(category => category.cat_id == id),
    getProducts : state =>  id => state.products.filter(prod => prod.sub_cat_id == id),
    },
    mutations:{
        addtoCart (state,payload){
            // console.log('payload',payload)
            // console.log('state.cart filter',state.cart.filter(c => c.id == payload.id).length)
            // console.log('state.cart',state.cart.length)
            if(state.cart.length > 0){
                if(state.cart.filter(c => c.id == payload.id).length > 0){
                        const indexValue = state.cart.findIndex(value => value.id == payload.id);
                        state.cart[indexValue].count += 1 ;
                        state.cart[indexValue].sub_total = state.cart[indexValue].count*state.cart[indexValue].price;
                    }
                else{
                        state.cart.push(payload);
                    }
                }
            else{
                    state.cart.push(payload);
                }
        }
    },
    actions: {
        addItem({commit}){
            console.log(commit);
            commit('addtoCart');
        }
    },
    modules:{}
})