const Lead = require("../models/Lead");

async function createLead(req, res) {
  try {
    const { name, phone, homeType, city, scope, source } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required"
      });
    }

    const lead = await Lead.create({
      name,
      phone,
      homeType,
      city,
      scope,
      source: source || "hero"
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create lead",
      error: error.message
    });
  }
}

async function getLeads(req, res) {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: leads.length,
      leads
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
      error: error.message
    });
  }
}

module.exports = { createLead, getLeads };
