class AdminController{
    static viewDashboard(req,res){
        res.render('admin/dashboard/index');
    }

    static viewCategory(req,res){
        res.render('admin/category/index');
    }

    static viewItem(req,res){
        res.render('admin/item/index');
    }

    static viewBank(req,res){
        res.render('admin/bank/index');
    }

    static viewBooking(req,res){
        res.render('admin/booking/index');
    }
}

module.exports = AdminController